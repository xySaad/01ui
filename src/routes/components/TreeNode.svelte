<script lang="ts">
	import { SvelteMap } from 'svelte/reactivity';
	import type { EventTreeNode } from '../+page';
	import TreeNode from './TreeNode.svelte';

	let {
		node,
		depth,
		selectedNode,
		expandedIds,
		selectNode,
		toggleExpand
	}: {
		node: EventTreeNode;
		depth: number;
		selectedNode: EventTreeNode | null;
		expandedIds: Set<number>;
		selectNode: (node: EventTreeNode) => void;
		toggleExpand: (id: number, e: MouseEvent) => void;
	} = $props();

	const leaf = $derived(node.children.length === 0);
	const expanded = $derived(expandedIds.has(node.id));
	const active = $derived(selectedNode?.id === node.id);
	const count = $derived(totalUsers(node));

	const childrenByType = $derived.by(() => {
		const map = new SvelteMap<string, EventTreeNode[]>();
		for (const child of node.children) {
			const type = child.object.type ?? '—';
			if (!map.has(type)) map.set(type, []);
			map.get(type)!.push(child);
		}
		return map;
	});

	const multipleTypes = $derived(childrenByType.size > 1);

	function totalUsers(n: EventTreeNode): number {
		if (n.children.length === 0) {
			return Object.values(n.usersByDate).reduce((acc, arr) => acc + arr.length, 0);
		}
		return n.children.reduce((acc, c) => acc + totalUsers(c), 0);
	}

	function fallbackName(n: EventTreeNode) {
		return n.object.name ?? '#' + n.id;
	}
</script>

<li>
	<button
		class="tree-item"
		class:active
		class:leaf
		style="--depth: {depth};"
		onclick={() => selectNode(node)}
	>
		{#each { length: depth } as _, i (i)}
			<span class="indent-track" style="left: calc({i} * 1.25rem + 0.625rem)"></span>
		{/each}

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<span
			class="chevron"
			class:invisible={leaf}
			class:open={expanded}
			onclick={(e) => toggleExpand(node.id, e)}
			role="button"
			tabindex="-1"
		>
			<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
				<path
					d="M3 2l4 3-4 3"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>

		<span class="node-type" class:leaf>{node.object.type ?? '—'}</span>
		<span class="node-name">{fallbackName(node)}</span>

		{#if count > 0}
			<span class="badge">{count}</span>
		{/if}
	</button>

	{#if !leaf && expanded}
		<ul class="subtree">
			{#each childrenByType as [type, children] (type)}
				{#if multipleTypes}
					<li class="type-group-row" style="--depth: {depth + 1};">
						<span class="type-group-label">{type}</span>
					</li>
				{/if}
				{#each children as child (child.id)}
					<TreeNode
						node={child}
						depth={depth + 1}
						{selectedNode}
						{expandedIds}
						{selectNode}
						{toggleExpand}
					/>
				{/each}
			{/each}
		</ul>
	{/if}
</li>

<style>
	.subtree {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.type-group-row {
		display: flex;
		align-items: center;
		padding: 0.4rem 0.75rem 0.15rem calc(var(--depth) * 1.25rem + 0.75rem);
		list-style: none;
	}

	.type-group-label {
		font-size: 0.53rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(255 255 255 / 0.18);
	}

	.tree-item {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		width: 100%;
		padding: 0.35rem 0.75rem 0.35rem calc(var(--depth) * 1.25rem + 0.75rem);
		background: none;
		border: none;
		border-left: 2px solid transparent;
		color: rgba(255 255 255 / 0.5);
		font-family: inherit;
		font-size: 0.78rem;
		text-align: left;
		cursor: pointer;
		transition:
			background 0.1s,
			color 0.1s,
			border-color 0.1s;
	}

	.tree-item:hover {
		background: rgba(255 255 255 / 0.04);
		color: rgba(255 255 255 / 0.85);
	}

	.tree-item.active {
		background: rgba(30 100 200 / 0.15);
		color: white;
		border-left-color: hsl(210 90% 60%);
	}

	.indent-track {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		background: rgba(255 255 255 / 0.06);
		pointer-events: none;
	}

	.chevron {
		flex-shrink: 0;
		width: 14px;
		height: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255 255 255 / 0.3);
		transition:
			transform 0.15s,
			color 0.15s;
		cursor: pointer;
		border-radius: 3px;
		z-index: 1;
	}

	.chevron:hover {
		color: white;
		background: rgba(255 255 255 / 0.08);
	}

	.chevron.open {
		transform: rotate(90deg);
	}

	.chevron.invisible {
		visibility: hidden;
	}

	.node-type {
		flex-shrink: 0;
		font-size: 0.58rem;
		letter-spacing: 0.1em;
		padding: 0.1em 0.35em;
		border-radius: 3px;
		background: rgba(255 255 255 / 0.07);
		color: rgba(255 255 255 / 0.35);
		text-transform: uppercase;
	}

	.node-type.leaf {
		background: rgba(30 120 255 / 0.15);
		color: hsl(210 80% 65%);
	}

	.node-name {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.badge {
		flex-shrink: 0;
		font-size: 0.6rem;
		background: rgba(255 255 255 / 0.08);
		color: rgba(255 255 255 / 0.3);
		padding: 0.1em 0.45em;
		border-radius: 10px;
		letter-spacing: 0.05em;
	}

	.tree-item.active .badge {
		background: rgba(30 100 200 / 0.3);
		color: hsl(210 80% 70%);
	}
</style>

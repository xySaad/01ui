<script lang="ts">
	import TreeNode from './TreeNode.svelte';
	import type { EventTreeNode } from '../+page';
	import { SvelteMap } from 'svelte/reactivity';

	let {
		eventTree,
		selectedNode,
		expandedIds,
		selectNode,
		toggleExpand
	}: {
		eventTree: EventTreeNode[];
		selectedNode: EventTreeNode | null;
		expandedIds: Set<number>;
		selectNode: (node: EventTreeNode) => void;
		toggleExpand: (id: number, e: MouseEvent) => void;
	} = $props();

	const groupedByType = $derived.by(() => {
		const map = new SvelteMap<string, EventTreeNode[]>();
		for (const node of eventTree) {
			const type = node.object.type ?? '—';
			if (!map.has(type)) map.set(type, []);
			map.get(type)!.push(node);
		}
		return map;
	});
</script>

<aside class="tree-panel">
	<header class="panel-header">
		<span class="header-label">EVENT TREE</span>
		<span class="header-count">{eventTree.length} root</span>
	</header>

	<nav class="tree-scroll">
		{#each groupedByType as [type, nodes] (type)}
			<div class="type-group">
				<span class="type-group-label">{type}</span>
				<ul class="tree-root">
					{#each nodes as root (root.id)}
						<TreeNode
							node={root}
							depth={0}
							{selectedNode}
							{expandedIds}
							{selectNode}
							{toggleExpand}
						/>
					{/each}
				</ul>
			</div>
		{/each}
	</nav>
</aside>

<style>
	.tree-panel {
		display: flex;
		flex-direction: column;
		border-right: 1px solid rgba(255 255 255 / 0.08);
		background: rgba(0 0 0 / 0.4);
		backdrop-filter: blur(12px);
		overflow: hidden;
	}

	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1rem 0.75rem;
		border-bottom: 1px solid rgba(255 255 255 / 0.06);
		flex-shrink: 0;
	}

	.header-label {
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		color: rgba(255 255 255 / 0.35);
	}

	.header-count {
		font-size: 0.6rem;
		color: rgba(255 255 255 / 0.2);
		letter-spacing: 0.05em;
	}

	.tree-scroll {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0.5rem 0;
		scrollbar-width: thin;
		scrollbar-color: rgba(255 255 255 / 0.08) transparent;
	}

	.tree-root {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.type-group {
		margin-bottom: 0.25rem;
	}

	.type-group-label {
		display: block;
		padding: 0.5rem 0.75rem 0.25rem;
		font-size: 0.55rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgba(255 255 255 / 0.2);
	}

	.type-group + .type-group {
		border-top: 1px solid rgba(255 255 255 / 0.05);
		padding-top: 0.25rem;
	}
</style>

<script lang="ts">
	import { SvelteMap } from 'svelte/reactivity';
	import type { EventTreeNode } from '../+page';

	let {
		node,
		selectNode
	}: {
		node: EventTreeNode;
		selectNode: (node: EventTreeNode) => void;
	} = $props();

	function totalUsers(n: EventTreeNode): number {
		if (n.children.length === 0) {
			return Object.values(n.usersByDate).reduce((acc, arr) => acc + arr.length, 0);
		}
		return n.children.reduce((acc, c) => acc + totalUsers(c), 0);
	}
	const groupedByType = $derived.by(() => {
		const map = new SvelteMap<string, EventTreeNode[]>();
		for (const child of node.children) {
			const type = child.object.type ?? '—';
			if (!map.has(type)) map.set(type, []);
			map.get(type)!.push(child);
		}
		return map;
	});
</script>

<section class="sub-section">
	<h2 class="section-title">
		<span>SUB-EVENTS</span>
		<span class="section-count">{node.children.length}</span>
	</h2>

	{#each groupedByType as [type, children] (type)}
		<div class="type-group">
			<span class="type-group-label">{type}</span>
			<ul class="children-grid">
				{#each children as child (child.id)}
					<li>
						<button class="child-card" onclick={() => selectNode(child)}>
							<span class="child-name">{child.object.name ?? `#${child.id}`}</span>
							<span class="child-users">{totalUsers(child)} users</span>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	.sub-section {
		margin-bottom: 2rem;
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		color: rgba(255 255 255 / 0.3);
		margin: 0 0 1rem;
		text-transform: uppercase;
	}

	.type-group {
		margin-bottom: 1.25rem;
	}

	.type-group-label {
		display: block;
		font-size: 0.58rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: rgba(255 255 255 / 0.25);
		margin-bottom: 0.5rem;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid rgba(255 255 255 / 0.05);
	}

	.section-count {
		background: rgba(255 255 255 / 0.07);
		color: rgba(255 255 255 / 0.4);
		font-size: 0.6rem;
		padding: 0.1em 0.5em;
		border-radius: 10px;
	}

	.children-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 0.5rem;
	}

	.child-card {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		width: 100%;
		padding: 0.75rem 0.875rem;
		background: rgba(255 255 255 / 0.03);
		border: 1px solid rgba(255 255 255 / 0.07);
		border-radius: 8px;
		text-align: left;
		cursor: pointer;
		transition:
			background 0.15s,
			border-color 0.15s,
			transform 0.1s;
		font-family: inherit;
		color: white;
	}

	.child-card:hover {
		background: rgba(255 255 255 / 0.06);
		border-color: rgba(255 255 255 / 0.14);
		transform: translateY(-1px);
	}

	.child-name {
		font-size: 0.82rem;
		color: rgba(255 255 255 / 0.85);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.child-users {
		font-size: 0.65rem;
		color: hsl(210 70% 60%);
		margin-top: 0.25rem;
	}
</style>

<script lang="ts">
	import EventHeader from './EventHeader.svelte';
	import SubEvents from './SubEvents.svelte';
	import DateSections from './DateSections.svelte';
	import type { EventTreeNode } from '../+page';

	let {
		selectedNode,
		selectNode
	}: {
		selectedNode: EventTreeNode | null;
		selectNode: (node: EventTreeNode) => void;
	} = $props();

	const isLeaf = $derived(selectedNode ? selectedNode.children.length === 0 : false);
</script>

<main class="detail-panel">
	{#if !selectedNode}
		<div class="empty-state">
			<div class="empty-icon">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
					<rect x="8" y="6" width="24" height="3" rx="1.5" fill="currentColor" opacity=".15" />
					<rect x="8" y="13" width="18" height="3" rx="1.5" fill="currentColor" opacity=".25" />
					<rect x="8" y="20" width="21" height="3" rx="1.5" fill="currentColor" opacity=".15" />
					<rect x="12" y="27" width="16" height="3" rx="1.5" fill="currentColor" opacity=".25" />
				</svg>
			</div>
			<p>Select an event to view details</p>
		</div>
	{:else}
		<EventHeader node={selectedNode} />

		{#if !isLeaf}
			<SubEvents node={selectedNode} {selectNode} />
		{:else}
			<DateSections node={selectedNode} />
		{/if}
	{/if}
</main>

<style>
	.detail-panel {
		overflow-y: auto;
		padding: 2rem 2.5rem;
		scrollbar-width: thin;
		scrollbar-color: rgba(255 255 255 / 0.08) transparent;
	}

	.empty-state {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		color: rgba(255 255 255 / 0.2);
	}

	.empty-icon {
		width: 64px;
		height: 64px;
		border: 1px solid rgba(255 255 255 / 0.07);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.empty-state p {
		font-size: 0.8rem;
		letter-spacing: 0.08em;
		margin: 0;
	}
</style>

<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import TreePanel from './components/TreePanel.svelte';
	import DetailPanel from './components/DetailPanel.svelte';
	import type { EventTreeNode } from './+page';

	let { data } = $props();
	const eventTree = $derived(data.eventTree);

	let selectedNode = $state<EventTreeNode | null>(null);
	let expandedIds = $state<Set<number>>(new Set());

	function toggleExpand(id: number, e: MouseEvent) {
		e.stopPropagation();
		const next = new SvelteSet(expandedIds);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		expandedIds = next;
	}

	function selectNode(node: EventTreeNode) {
		selectedNode = node;
		if (node.children.length > 0) {
			const next = new SvelteSet(expandedIds);
			next.add(node.id);
			expandedIds = next;
		}
	}
</script>

<div class="layout">
	<TreePanel {eventTree} {selectedNode} {expandedIds} {selectNode} {toggleExpand} />
	<DetailPanel {selectedNode} {selectNode} />
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 280px 1fr;
		height: 100vh;
		overflow: hidden;
		font-family: 'Space Mono', 'Courier New', monospace;
	}
</style>

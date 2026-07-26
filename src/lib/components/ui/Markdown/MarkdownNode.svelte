<script lang="ts">
	import CopyButton from '$lib/components/CopyButton.svelte';
	import type { Element, Nodes as HastNodes } from 'hast';
	import { fromHtml } from 'hast-util-from-html';
	import { toString as hastToString } from 'hast-util-to-string';
	import MarkdownNode from './MarkdownNode.svelte';
	import { sanitizeNode } from './markdown';

	interface Props {
		node: HastNodes;
		visitor?: (node: HastNodes) => HastNodes;
		/** set only by this component's own recursive calls */
		trustUnsafeHTML?: boolean;
	}
	const { node: unvisitedNode, visitor, trustUnsafeHTML = false }: Props = $props();
	const node = $derived.by(() => {
		const visited = visitor?.(unvisitedNode) ?? unvisitedNode;
		return trustUnsafeHTML ? visited : sanitizeNode(visited);
	});

	const isCodeBlock = (elm: Element) => {
		const className = elm.properties.className;
		return (
			elm.tagName === 'code' &&
			className &&
			className.findIndex((v) => v.startsWith('language')) > -1
		);
	};
</script>

{#if node.type === 'element' && node.children.length > 0}
	<div class="element {isCodeBlock(node) && 'code'}">
		{#if isCodeBlock(node)}
			<div class="copy">
				<CopyButton text={hastToString(node)} />
			</div>
		{/if}
		<svelte:element this={node.tagName} {...node.properties}>
			{#each node.children as child (child)}
				<MarkdownNode trustUnsafeHTML={true} {visitor} node={child} />
			{/each}
		</svelte:element>
	</div>
{:else if node.type === 'element'}
	<!-- Render elements that has no children without a snippet/children
		 to prevent self closing elements error  -->
	<svelte:element this={node.tagName} {...node.properties} />
{:else if node.type === 'text'}
	{node.value}
{:else if node.type === 'raw'}
	{@const hast = fromHtml(node.value, { fragment: true })}
	<MarkdownNode trustUnsafeHTML={true} {visitor} node={hast} />
{:else if node.type === 'root'}
	{#each node.children as child (child)}
		<MarkdownNode trustUnsafeHTML={true} {visitor} node={child} />
	{/each}
{:else}
	<div class="error">
		Unhandled markdown parsing {node.type}
	</div>
{/if}

<style>
	.element {
		display: contents;

		&.code {
			display: flex;
			position: relative;

			.copy {
				position: absolute;
				top: calc(-1 * var(--base-size-16));
				right: calc(-1 * var(--base-size-16));
			}
		}
	}
</style>

<script lang="ts" generics="T extends Record<string, unknown>">
	import 'github-markdown-css/github-markdown.css';
	import { fromMarkdown } from 'mdast-util-from-markdown';
	import { toHast } from 'mdast-util-to-hast';
	import type { Snippet } from 'svelte';
	import MarkdownMenu, { type Options } from './MarkdownMenu.svelte';
	import MarkdownNode from './MarkdownNode.svelte';
	import { resolveRelativeUrl } from './markdown';
	import type { Nodes as HastNodes } from 'hast';

	type Props = {
		fileName?: string;
		Title?: Snippet;
		src: { raw: string; url?: never } | { raw?: never; url: string };
	};

	const { src, fileName, Title, ...options }: Props & Options<T, keyof Props> = $props();
	const { raw, url: inputURL } = $derived(src);
	const url = $derived(inputURL ?? URL.createObjectURL(new Blob([raw])));
	const fetchMarkdown = async (url: string) => {
		const resp = await fetch(url);
		return await resp.text();
	};

	const markdown = $derived.by(async () => {
		const rawSource = raw ?? (await fetchMarkdown(url));
		const tree = fromMarkdown(rawSource);
		return toHast(tree, { allowDangerousHtml: true });
	});

	const visitor = (node: HastNodes) => {
		if (inputURL) return resolveRelativeUrl(node, inputURL);
		else return node;
	};
	let maxWidth = $state(100);
</script>

<section>
	<div class="title">
		{@render Title?.()}
		<MarkdownMenu bind:maxWidth {fileName} {url} {...options} />
	</div>

	<div class="markdown-body" style:max-width="{maxWidth}%">
		{#await markdown}
			Loading markdown...
		{:then root}
			<MarkdownNode trustUnsafeHTML={true} node={root} {visitor} />
		{:catch}
			Failed to load markdown.
		{/await}
	</div>
</section>

<style>
	section {
		border-radius: 10px;

		.title {
			display: flex;
			align-items: center;
			padding: 0 10px;
		}
		.markdown-body {
			padding: 20px;
			border-radius: 10px;
			margin: auto;
			transition: max-width 0.1s ease-out;
		}
	}
</style>

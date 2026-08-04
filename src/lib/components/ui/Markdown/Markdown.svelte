<script lang="ts" generics="T extends Record<string, unknown>">
	import SafeHtml from '$lib/components/shared/SafeHtml.svelte';
	import Suspend from '$lib/components/shared/Suspend.svelte';
	import 'github-markdown-css/github-markdown.css';
	import { Marked } from 'marked';
	import markedKatex from 'marked-katex-extension';
	import type { Snippet } from 'svelte';
	import { relativeUrlResolver } from './markdown';
	import MarkdownMenu, { type Options } from './MarkdownMenu.svelte';
	const markdownParser = new Marked(markedKatex({ throwOnError: false }));

	type Props = {
		fileName?: string;
		Title?: Snippet;
		Menu?: Snippet;
		width?: string;
		src: { raw: string; url?: never } | { raw?: never; url: string };
	};

	const { src, fileName, Title, Menu, width, ...options }: Props & Options<T, keyof Props> =
		$props();
	const { raw, url: inputURL } = $derived(src);
	const url = $derived(inputURL ?? URL.createObjectURL(new Blob([raw])));
	const fetchMarkdown = async (url: string) => {
		const resp = await fetch(url);
		return await resp.text();
	};

	const markdown = $derived.by(async () => {
		const rawSource = raw ?? (await fetchMarkdown(url));
		const walkTokens = inputURL ? relativeUrlResolver(inputURL) : null;
		return markdownParser.parse(rawSource, { walkTokens });
	});
	let maxWidth = $state(100);
</script>

<section style:width>
	<div class="title">
		{@render Title?.()}
		{#if Menu}
			{@render Menu()}
		{:else}
			<Suspend data={markdown}>
				{#snippet children(source)}
					<MarkdownMenu bind:maxWidth {fileName} {source} {url} {...options} />
				{/snippet}
			</Suspend>
		{/if}
	</div>

	<div class="markdown-body" style:max-width="{maxWidth}%">
		{#await markdown}
			Loading markdown...
		{:then source}
			<SafeHtml html={source} />
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

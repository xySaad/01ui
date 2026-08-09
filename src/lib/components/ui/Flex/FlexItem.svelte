<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		minWidth: string;
		maxWidth: string;
		grow?: boolean;
	}
	const { children, minWidth, maxWidth, grow = false }: Props = $props();
</script>

<div
	style="
		flex: 1;
		min-width: min({minWidth}, 100%);
		max-width: {grow ? 'auto' : maxWidth};"
>
	{@render children()}
</div>

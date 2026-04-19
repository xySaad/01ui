<script lang="ts">
	import { SearchEvent } from '$lib/utils/events';
	import { resolve } from '$app/paths';

	let { query = $bindable<string>() } = $props();
	let searchResult = $derived(SearchEvent(query));
</script>

<form>
	{#each searchResult as res (res)}
		<a
			href={resolve(`/content/${res.path}`)}
			class="result"
			title={res.path}
			onclick={() => (query = res.path)}
		>
			{#each res.highlight as part, index (index)}
				<span class="part">{part}</span>
				<span class="highlight">{query}</span>
			{/each}
		</a>
	{/each}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
	}

	.result {
		padding: 10px;
		display: flex;
		width: 100%;
		text-align: left;
		cursor: pointer;

		&:focus,
		&:hover {
			background: var(--bg-3);
		}
	}

	.highlight {
		font-weight: bolder;
	}

	.highlight:last-child {
		display: none;
	}
</style>

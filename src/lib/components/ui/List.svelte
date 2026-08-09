<script lang="ts" generics="T extends {id: unknown}">
	import { ctrlAltF } from '$lib/actions/shortcuts';
	import FlexContainer from '$lib/components/ui/Flex/FlexContainer.svelte';
	import type { ResultItem, SearchResult } from '$lib/workers/search.worker';
	import SearchWorker from '$lib/workers/search.worker.ts?worker';
	import { onDestroy, type Snippet } from 'svelte';
	import Divider from '../shared/Divider.svelte';
	import Suspend from '../shared/Suspend.svelte';
	import Wordmark from '../shared/Wordmark.svelte';
	import Input from '../ui/Input.svelte';
	import Badge from './Badge.svelte';
	import Select from './Select.svelte';
	interface Props {
		items: T[];
		Item: Snippet<[T]>;
	}

	const { items, Item }: Props = $props();

	let searchQuery = $state('');
	let filterValue = $state('all');
	let filterOptions: string[] = $state([]);
	const filterItemsByKey = (items: ResultItem<T>[], key: string) =>
		items.filter((v) => v.keys.includes(key));

	const worker = new SearchWorker();
	$effect.pre(() => worker.postMessage({ type: 'items', items }));
	onDestroy(() => worker.terminate());
	const search = (query: string): Promise<ResultItem<T>[]> =>
		new Promise((resolve) => {
			const channel = new MessageChannel();
			channel.port1.onmessage = (event: MessageEvent<SearchResult<T>>) => {
				resolve(event.data.items);
				filterOptions = Array.from(event.data.keys);
				if (filterValue !== 'all' && !filterOptions.includes(filterValue)) filterValue = 'all';
			};
			worker.postMessage({ type: 'search', query }, [channel.port2]);
		});
</script>

<div class="list">
	{#if items.length > 3}
		<Divider>
			<Wordmark>Search</Wordmark>
		</Divider>

		<section class="search-filter" use:ctrlAltF>
			{#if filterOptions.length > 1}
				{@const options = filterOptions.map((o) => ({ value: o, text: o }))}
				<Select bind:value={filterValue} options={[{ text: 'all', value: 'all' }, ...options]} />
			{/if}
			<div class="input">
				<Input
					// use:ctrlAltF
					name="search"
					type="text"
					placeholder="srm, go-reloaded"
					bind:value={searchQuery}
				/>
			</div>
		</section>
	{/if}
	<Suspend data={search(searchQuery)} size="24px">
		{#snippet children(results)}
			{@const filtredItems =
				filterValue === 'all' ? results : filterItemsByKey(results, filterValue)}
			<Divider>
				<Badge>{filtredItems.length} result</Badge>
			</Divider>
			<FlexContainer minWidth={300} gap="16px" justifyContent="center">
				{#snippet children(Flex)}
					{#each filtredItems as item (item.value.id)}
						<Flex>
							{@render Item(item.value)}
						</Flex>
					{/each}
				{/snippet}
			</FlexContainer>
		{/snippet}
	</Suspend>
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		min-height: 100svh;

		.search-filter {
			margin: 0 auto;
			display: flex;
			justify-content: center;
			gap: 10px;
			width: 100%;

			.input {
				width: clamp(280px, 80%, 600px);
			}
		}
	}
</style>

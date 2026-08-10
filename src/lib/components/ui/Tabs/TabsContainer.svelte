<script lang="ts" generics="T extends Record<string, unknown>">
	import type { Snippet } from 'svelte';
	import FlexContainer from '../Flex/FlexContainer.svelte';
	const objectKeys = <T extends object>(o: T) => Object.keys(o) as (keyof T)[];

	type Props = {
		active?: TabKey;
		hidden?: Partial<Record<TabKey, boolean>>;
	};

	const Prefix = 'Nav';
	type Prefix = typeof Prefix;

	type GetBaseName<Key> = Key extends `${Prefix}${infer Name}` ? Name : Key;
	type SnippetKeys = Exclude<keyof T, keyof Props>;
	type TabKey = GetBaseName<SnippetKeys> & string;
	type TabSnippets = Record<TabKey, Snippet>;

	type NavKey = `${Prefix}${TabKey}`;
	type NavSnippets = Record<NavKey, Snippet>;
	type SnippetProps = T & TabSnippets & NavSnippets;

	const props: Props & SnippetProps = $props();
	const isTabKey = (k: string): k is TabKey =>
		props[k] !== undefined && props[`${Prefix}${k}`] !== undefined;
	const { active, hidden } = $derived(props);
	const navSnippets: NavSnippets = $derived(props);
	const tabSnippets: TabSnippets = $derived(props);

	const tabKeys = $derived(objectKeys(tabSnippets).filter((k) => isTabKey(k) && !hidden?.[k]));

	let activeNav = $derived(active && hidden?.[active] !== true ? active : tabKeys[0]);
</script>

<nav>
	<FlexContainer minWidth={200} gap="5px">
		{#snippet children(Flex)}
			{#each tabKeys as key (key)}
				{@const active = activeNav === key}
				<Flex>
					<button class:active onclick={() => (activeNav = key)}>
						{@render navSnippets[`${Prefix}${key}`]()}
					</button>
				</Flex>
			{/each}
		{/snippet}
	</FlexContainer>
</nav>

{#each tabKeys as key (key)}
	{@const active = activeNav === key}
	<section class:active>
		{@render tabSnippets[key]()}
	</section>
{/each}

<style>
	section {
		display: none;
		&.active {
			display: block;
		}
	}
	nav {
		display: flex;
		gap: 3px;
		padding: 4px;
		background: var(--primary);
		border: 1px solid var(--card-border);
		border-radius: calc(var(--surface-radius) + 4px);
		width: 100%;

		button {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			display: flex;
			align-items: center;
			gap: 6px;
			padding: 0.42rem 1rem;
			border-radius: var(--surface-radius);
			border: 1px solid transparent;
			background: transparent;
			font-size: 0.8rem;
			font-weight: 600;
			letter-spacing: 0.025em;
			color: var(--text-muted);
			cursor: pointer;
			transition:
				background 0.18s ease,
				color 0.18s ease,
				border-color 0.18s ease,
				box-shadow 0.18s ease;

			&:hover {
				color: var(--text-value);
				background: var(--secondary);
			}

			&.active,
			&:hover.active {
				background: var(--surface-bg-hover);
				border-color: var(--surface-border);
				color: var(--text-title);
			}
		}
	}
</style>

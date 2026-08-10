<script module lang="ts">
	interface Props {
		fileName: string;
		maxWidth: number;
		source: string;
	}
	type OptionKey<T extends Record<string, unknown>, P extends string> = Exclude<
		keyof T,
		keyof Props | P
	>;

	export type Options<T extends Record<string, unknown>, P extends string = never> = Record<
		OptionKey<T, P>,
		Snippet
	> &
		T;
</script>

<script lang="ts" generics="T extends Record<string, unknown> = Record<never, never>">
	import PopoverMenu from '$lib/components/ui/PopoverMenu.svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import DownloadButton from '$lib/components/ui/DownloadButton.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import VisibilityToggle from '$lib/components/ui/VisibilityToggle.svelte';
	import MoreVert from '$lib/assets/svg/more-vert.svelte';
	import RuleSettings from '$lib/assets/svg/rule-settings.svelte';
	import type { Snippet } from 'svelte';

	let { fileName, maxWidth = $bindable(), source, ...options }: Props & Options<T> = $props();
	let isRangeResize = $state(true);
</script>

<div class="menu">
	<PopoverMenu {...options}>
		{#snippet Icon()}
			<MoreVert />
		{/snippet}
		{#snippet Download()}
			<DownloadButton data={source} {fileName} />
		{/snippet}
		{#snippet Copy()}
			<CopyButton text={source} />
		{/snippet}
		{#snippet Resize()}
			<div class="resize">
				<VisibilityToggle isFirstVisible={!isRangeResize}>
					{#snippet first()}
						<div class="flex" style:gap="5px">
							<Button style="flex:1" onclick={() => maxWidth > 1 && maxWidth--}>-</Button>
							<Button style="flex:1" onclick={() => maxWidth < 100 && maxWidth++}>+</Button>
						</div>
					{/snippet}
					{#snippet second()}
						<div class="range">
							<input type="range" min="1" max="100" bind:value={maxWidth} />
						</div>
					{/snippet}
				</VisibilityToggle>

				<Input size={3} type="number" bind:value={maxWidth} />
				<Button style="flex:1" onclick={() => (isRangeResize = !isRangeResize)}>
					<RuleSettings />
				</Button>
			</div>
		{/snippet}
	</PopoverMenu>
</div>

<style>
	.menu {
		width: fit-content;
		margin-left: auto;

		.resize {
			align-items: end;
			display: flex;
			gap: 10px;
			color: var(--text-primary);

			.range {
				display: flex;
				align-items: center;
				height: 100%;

				input {
					width: 100%;
				}
			}
		}
	}
</style>

<script lang="ts">
	import BoltBoost from '$lib/assets/svg/bolt-boost.svelte';
	import DataUsage from '$lib/assets/svg/data-usage.svelte';
	import Description from '$lib/assets/svg/description.svelte';
	import Exercise from '$lib/assets/svg/exercise.svelte';
	import Function from '$lib/assets/svg/function.svelte';
	import Groups from '$lib/assets/svg/groups.svelte';
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import Divider from '$lib/components/shared/Divider.svelte';
	import Icon from '$lib/components/shared/Icon.svelte';
	import Wordmark from '$lib/components/shared/Wordmark.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import type { ObjectAttrs } from '$lib/types/object/attrs';
	import { formatBytes } from '$lib/utils/units';
	interface Props {
		attrs: ObjectAttrs;
	}
	const { attrs }: Props = $props();
</script>

<Divider><Wordmark>Overview</Wordmark></Divider>

<section class="overview">
	<div class="badges">
		{#if attrs.type === 'project' || attrs.type === 'raid' || attrs.type === 'exercise'}
			{@const { baseXp, language } = attrs.attrs}
			<Badge tooltip="language"><Function /> {language}</Badge>
			<Badge tooltip="XP"><BoltBoost /> {baseXp ? formatBytes(baseXp) : '-'}</Badge>
		{/if}

		{#if attrs.type === 'project' || attrs.type === 'raid'}
			{@const { requiredAuditRatio, groupMax, groupMin } = attrs.attrs}
			<Badge tooltip="required audit ratio"><DataUsage /> {requiredAuditRatio}</Badge>
			<Badge tooltip="group size"><Groups /> {groupMin} / {groupMax}</Badge>
		{:else}
			{@const { category, level } = attrs.attrs}
			<Badge tooltip="Category" type="success">{category?.toUpperCase()}</Badge>
			{@const iconCount = (level ?? 0) / 2}
			{@const fullIcons = Math.floor(iconCount)}
			{@const partialIcon = (iconCount % 1) * 100}
			<Badge tooltip="Level {level}">
				{#each { length: fullIcons } as _, i (i)}
					<Exercise />
				{/each}
				{#if partialIcon > 0}
					<div class="partial-exercise">
						<div class="icon-base">
							<Exercise />
						</div>

						<div class="icon-filled" style:--partial="{partialIcon}%">
							<Exercise />
						</div>
					</div>
				{/if}
			</Badge>
		{/if}
	</div>

	{#if attrs.type === 'exercise'}
		{@const { expectedFiles } = attrs.attrs}
		<Card>
			<CardHeader title="Expected Files">
				{#snippet icon()}<Icon><Description /></Icon>{/snippet}
			</CardHeader>
			<div class="files">
				{#each expectedFiles as file (file)}
					<Badge>{file}</Badge>
				{/each}
			</div>
		</Card>
	{/if}
</section>

<style>
	.overview {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 10px;

		.files {
			display: flex;
			white-space: nowrap;
			gap: 10px;
			flex-wrap: wrap;
		}

		.badges {
			display: flex;
			gap: 10px;

			.partial-exercise {
				position: relative;
				display: flex;

				.icon-base {
					opacity: 0.3;
				}

				.icon-filled {
					position: absolute;
					top: 0;
					left: 0;
					clip-path: inset(0 calc(100% - var(--partial)) 0 0);
				}
			}
		}
	}
</style>

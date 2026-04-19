<script lang="ts">
	import { Tabs } from 'bits-ui';
	import Markdown from '$lib/components/Markdown.svelte';
	import { GetEvent } from '$lib/utils/events';
	import { page } from '$app/state';

	const event = $derived(GetEvent(page.params.slug || ''));
	const content = $derived(event?.attrs);
</script>

{#if content}
	<section class="markdown-body">
		<Tabs.Root value={content.subject ? 'subject' : 'audit'} class="tabs">
			<Tabs.List class="tablist">
				{#if content.subject}
					<Tabs.Trigger class="tab" value="subject">Subject</Tabs.Trigger>
				{/if}

				{#if (content.validations?.length ?? 0) > 0}
					<Tabs.Trigger class="tab" value="audit">Audit</Tabs.Trigger>
				{/if}
			</Tabs.List>

			{#if content.subject}
				<Tabs.Content value="subject">
					<div class="scroll">
						<Markdown url={`https://learn.zone01oujda.ma${content.subject}`} />
					</div>
				</Tabs.Content>
			{/if}

			{#if content.validations}
				<Tabs.Content value="audit">
					<div class="scroll">
						{#each content.validations as validation, index (index)}
							{#if validation.form}
								<Markdown url={`https://learn.zone01oujda.ma${validation.form}`} />
							{/if}
							{#if validation.testImage}
								Test Image:
								<a href="https://{validation.testImage}" rel="external">
									{validation.testImage}
								</a>
							{/if}
						{/each}
					</div>
				</Tabs.Content>
			{/if}
		</Tabs.Root>
	</section>
{/if}

<style>
	.scroll {
		max-height: 70vh;
		overflow-y: auto;
	}
	section {
		border-radius: 10px;
		padding: 16px;
		width: fit-content;
		width: calc(100% - 25px);
		margin: 0 auto;
		max-width: 1200px;

		:global(.tabs) {
			padding: 10px;
		}

		:global(.tab) {
			padding: 10px 20px;
			border-radius: 8px;
			width: 100%;
			border: solid 1px;
			border-color: transparent;
			&:hover {
				background: var(--bg-3);
			}
		}

		:global(button[data-state='active']) {
			background: var(--secondary) !important;
			border-color: var(--bg-3);
		}

		:global(.tablist) {
			display: flex;
			justify-content: space-around;
			width: 100%;
			gap: 20px;
		}
	}
</style>

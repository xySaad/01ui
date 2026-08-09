<script lang="ts">
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import FlexContainer from '$lib/components/ui/Flex/FlexContainer.svelte';
	import Markdown from '$lib/components/ui/Markdown/Markdown.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		currentIndex: number;
		lastIndex?: number;
		questions: string[];
		title: string | Snippet;
	}
	let { title, currentIndex = $bindable(), questions, lastIndex = 0 }: Props = $props();
</script>

{#if currentIndex > lastIndex - 1}
	<Card>
		<CardHeader {title} />
		<div class="checkboxList">
			{#each questions.slice(0, currentIndex - lastIndex + 1) as q, i (q)}
				<FlexContainer gap="10px" minWidth={600}>
					{#snippet children(Flex)}
						<Flex grow={true}>
							<Markdown src={{ raw: q }}>
								{#snippet Menu()}<!--  -->{/snippet}
							</Markdown>
						</Flex>
						<Flex overrideMinWidth={40}>
							<label>
								<input
									type="checkbox"
									onchange={(e) => {
										if (e.target instanceof HTMLInputElement)
											currentIndex = e.target.checked ? i + 1 + lastIndex : i + lastIndex;
									}}
								/>
							</label>
						</Flex>
					{/snippet}
				</FlexContainer>
			{/each}
		</div>
	</Card>
{/if}

<style lang="scss">
	.checkboxList {
		display: flex;
		flex-direction: column;
		gap: 10px;

		label {
			display: flex;
			min-height: 40px;
			height: 100%;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			border-radius: var(--surface-radius);
			background: var(--surface-bg);
			border: var(--surface-border) solid 1px;

			&:has(input:checked) {
				background: var(--success-bg);
			}

			input {
				background: none;
				box-shadow: none;
				cursor: pointer;

				&:checked {
					background: var(--success);
					border-color: var(--success-border);
				}
			}
		}
	}
</style>

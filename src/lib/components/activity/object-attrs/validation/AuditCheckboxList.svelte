<script lang="ts">
	import CardHeader from '$lib/components/Card/CardHeader.svelte';
	import Card from '$lib/components/ui/Card.svelte';
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
		{#each questions.slice(0, currentIndex - lastIndex + 1) as q, i (q)}
			<div class="question">
				<Markdown src={{ raw: q }} width="95%">
					{#snippet Menu()}<!--  -->{/snippet}
				</Markdown>
				<label>
					<input
						type="checkbox"
						onchange={(e) => {
							if (e.target instanceof HTMLInputElement)
								currentIndex = e.target.checked ? i + 1 + lastIndex : i + lastIndex;
						}}
					/>
				</label>
			</div>
		{/each}
	</Card>
{/if}

<style>
	.question {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		label {
			padding: 5px;
			display: flex;
			min-width: 0;
			flex: 1;
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

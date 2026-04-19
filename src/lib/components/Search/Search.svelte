<script lang="ts">
	import AutoComplete from './AutoComplete.svelte';
	import { ctrlAltF } from '$lib/actions/shortcuts';
	let input: string = $state('');
</script>

<section>
	<input use:ctrlAltF type="text" bind:value={input} placeholder="search content" />
	{#if input.length === 0}
		<div class="hint">
			<div class="key">CTRL</div>
			<div class="key">ALT</div>
			<div class="key">F</div>
		</div>
	{/if}
	<div class="autoComplete">
		<AutoComplete bind:query={input} />
	</div>
</section>

<style>
	section {
		width: 50%;
		max-width: 600px;
		position: relative;
		--gap: 5px;

		&:has(> input:focus) {
			.hint {
				display: none;
			}
		}
		.hint {
			display: flex;
			align-items: center;
			gap: var(--gap);
			font-size: small;
			position: absolute;
			right: var(--gap);
			bottom: 50%;
			transform: translateY(50%);

			.key {
				background: var(--bg-3);
				padding: 5px;
				border-radius: 5px;
			}
		}

		input {
			width: 100%;
			padding: 10px 20px;
		}

		input:focus ~ .autoComplete,
		.autoComplete:hover,
		.autoComplete:focus-within {
			display: block;
		}

		.autoComplete {
			background: var(--secondary);
			z-index: 1;
			box-sizing: border-box;
			display: none;
			position: absolute;
			top: 100%;
			width: 100%;
			margin-top: 5px;
			min-height: 0;
			overflow: scroll;
			max-height: 335px;
			border-radius: 10px;
			border: var(--bg-3) solid 1px;
		}
	}
</style>

<script lang="ts">
	let loggedIn = $state(false);
</script>

{#if !loggedIn}
	<button class="btn btn-blue"> Login </button>
{/if}

<style lang="postcss">
	@reference "tailwindcss";
	.btn {
		cursor: pointer;
		@apply rounded px-4 py-2 font-bold;
	}
	.btn-blue {
		background: var(--bg-3);
	}
	.btn-blue:hover {
		@apply bg-blue-700;
	}
</style>

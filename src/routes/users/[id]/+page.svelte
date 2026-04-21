<script lang="ts">
	import UserCard from '$lib/components/UserCard.svelte';
	import { usersMap } from '$lib/state/users';
	import type { PageProps } from './$types';

	const { params }: PageProps = $props();
	const user = $derived(usersMap.get(+params.id));
</script>

<div class="profile">
	{#if user}
		<UserCard {user} eventUserRel={undefined} />
	{/if}
</div>

<style>
	.profile {
		padding: 20px;
	}
</style>

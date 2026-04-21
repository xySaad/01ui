<script lang="ts">
	import UserCard from '$lib/components/UserCard.svelte';
	import { eventsMap } from '$lib/state/events';
	import { usersMap } from '$lib/state/users';
	import type { PageProps } from './$types';

	const { params }: PageProps = $props();

	const event = $derived(eventsMap.get(+params.id));
	let search = $state('');

	const filterEventUsers = () => {
		return event?.usersRelation
			.map((userRel) => {
				const user = usersMap.get(userRel.userId);
				if (user)
					return { ...user, level: userRel.level, auditRatio: Number(userRel.userAuditRatio) };
			})
			.filter(
				(u): u is NonNullable<typeof u> =>
					u !== undefined &&
					[u.login, u.firstName, u.lastName, `${u.firstName} ${u.lastName}`].some((str) =>
						str?.toLocaleLowerCase().includes(search.trim())
					)
			);
	};

	const filteredUsers = $derived(filterEventUsers());
</script>

<div class="eventUsers">
	<input bind:value={search} type="search" placeholder="Search by login or name" class="search" />
	<div class="usersList">
		{#each filteredUsers as user (user?.id)}
			<div class="user">
				<UserCard {user} userLevel={user.level} auditRatio={user.auditRatio} />
			</div>
		{/each}
	</div>
</div>

<style>
	.search {
		border-radius: 12px;
		padding: 5px 12px;
		width: 200px;
		max-width: 600px;
		margin-right: auto;
	}
	.eventUsers {
		padding: 20px;
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.search::placeholder {
		color: rgba(255, 255, 255, 0.45);
	}

	.search:focus {
		border-color: rgba(255, 255, 255, 0.28);
		background: rgba(255, 255, 255, 0.09);
		box-shadow:
			0 0 0 4px rgba(255, 255, 255, 0.06),
			0 10px 28px rgba(0, 0, 0, 0.24);
		transform: translateY(-1px);
	}

	.usersList {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
		align-items: stretch;
	}

	.user {
		min-width: 0;
		display: contents;
	}
</style>

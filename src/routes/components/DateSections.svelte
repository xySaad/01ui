<script lang="ts">
	import UserCard from '$lib/components/UserCard.svelte';
	import type { EventTreeNode } from '../+page';

	let { node }: { node: EventTreeNode } = $props();

	const sortedDateKeys = $derived(
		Object.keys(node.usersByDate).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
	);

	function formatDateKey(key: string) {
		return new Date(key).toLocaleDateString('en-GB', {
			weekday: 'short',
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});
	}
</script>

{#if sortedDateKeys.length === 0}
	<p class="no-users">No participants registered.</p>
{:else}
	{#each sortedDateKeys as dateKey (dateKey)}
		{@const users = node.usersByDate[dateKey]}
		<section class="date-section">
			<h2 class="date-heading">
				<span class="date-dot"></span>
				{formatDateKey(dateKey)}
				<span class="section-count">{users.length}</span>
			</h2>
			<div class="users-grid">
				{#each users as user (user.publicUser?.id)}
					<UserCard user={user.publicUser} />
				{/each}
			</div>
		</section>
	{/each}
{/if}

<style>
	.date-section {
		margin-bottom: 2.5rem;
	}

	.date-heading {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		color: rgba(255 255 255 / 0.3);
		margin: 0 0 1rem;
		text-transform: uppercase;
	}

	.section-count {
		background: rgba(255 255 255 / 0.07);
		color: rgba(255 255 255 / 0.4);
		font-size: 0.6rem;
		padding: 0.1em 0.5em;
		border-radius: 10px;
	}

	.date-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: hsl(210 80% 60%);
		flex-shrink: 0;
	}

	.users-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 0.75rem;
	}

	.no-users {
		font-size: 0.8rem;
		color: rgba(255 255 255 / 0.25);
		padding: 2rem 0;
		letter-spacing: 0.05em;
		margin: 0;
	}
</style>

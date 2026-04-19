<script lang="ts">
	import type { EventUser } from '../../routes/+page';

	type user = EventUser['publicUser'];

	let { user }: { user: user } = $props();
</script>

<article class="user-card">
	<header class="user-header">
		{#if user?.avatarUrl}
			<img src={user.avatarUrl} alt={user.login} class="avatar" />
		{/if}

		<div class="user-meta">
			<h2 class="login">{user?.login}</h2>
			<p class="id">{user?.id}</p>
		</div>
	</header>

	<dl class="details">
		<div>
			<dt>firstName</dt>
			<dd>{user?.firstName}</dd>
		</div>

		<div>
			<dt>lastName</dt>
			<dd>{user?.lastName}</dd>
		</div>

		<div>
			<dt>githubId</dt>
			<dd>{user?.githubId}</dd>
		</div>
		<!-- 
		<div>
			<dt>labels</dt>
			<dd class="labels">
				{#each user.labels as item (item.label)}
					<div class="label-card">
						<div><span>label.id</span> {item.label.id}</div>
						<div><span>label.name</span> {item.label.name}</div>
						<div><span>label.description</span> {item.label.description}</div>
						<div><span>label.createdAt</span> {item.label.createdAt}</div>
						<div><span>label.updatedAt</span> {item.label.updatedAt}</div>
						<div><span>event.path</span> {item.label.event?.path}</div>
					</div>
				{/each}
			</dd>
		</div> -->
	</dl>
</article>

<style>
	.user-card {
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.05);
		padding: 1rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
	}

	.user-header {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.avatar {
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 9999px;
		object-fit: cover;
	}

	.user-meta {
		min-width: 0;
	}

	.login {
		font-size: 1.125rem;
		font-weight: 600;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.id {
		font-size: 0.875rem;
		opacity: 0.8;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.details {
		margin-top: 1rem;
		font-size: 0.875rem;
	}

	.details dt {
		opacity: 0.6;
	}

	/* .labels {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.label-card {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.2);
		padding: 0.75rem;
		border-radius: 0.75rem;
	} */
</style>

<script lang="ts">
	import { recordsMap } from '$lib/state/users';
	import type { User } from '$lib/types/user';
	import { formatDate, timeUntil } from '$lib/utils/time';

	let { user, userLevel, auditRatio }: { user: User; userLevel: number; auditRatio: number } =
		$props();
</script>

<article class="user-card">
	<header class="user-header">
		<div class={{ avatar: true, banned: !user.canAccessPlatform }}>
			{#if user.avatarUrl}
				<img src={user.avatarUrl} alt={user.login} />
			{/if}
			<div class="banned-status">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" />
				</svg>
			</div>
		</div>

		<div class="user-meta">
			<div class="title-row">
				<h2 class="login">{user.login}</h2>
				{#if userLevel}
					<span class="user-level" data-level={userLevel} data-tooltip="Level {userLevel}">
						{userLevel}
					</span>
				{/if}
			</div>
			<p class="id">#{user.id}</p>
		</div>
	</header>

	<dl class="details">
		<div>
			<dt>firstName</dt>
			<dd>{user.firstName}</dd>

			<dt>lastName</dt>
			<dd>{user.lastName}</dd>
		</div>
		<div>
			<dt>audit ratio</dt>
			<dd>{auditRatio.toFixed(2)}</dd>
		</div>
	</dl>
	<div class="unavailable-banner" data-visible={user.canAccessPlatform && !user.canBeAuditor}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="15" y1="9" x2="9" y2="15" />
			<line x1="9" y1="9" x2="15" y2="15" />
		</svg>
		{#if user.id}
			{@const endAt = recordsMap.get(user.id)}
			{#if endAt}
				<span data-tooltip={'Unavailable until ' + formatDate(endAt)}>
					{timeUntil(endAt.toString())}
				</span>
			{:else}
				<span>Unavailable for audits</span>
			{/if}
		{/if}
	</div>
</article>

<style>
	.unavailable-banner {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		margin-top: 0.75rem;
		margin-bottom: 0.5rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.625rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: hsl(0, 70%, 65%);
		background: hsla(0, 60%, 15%, 0.35);
		border: 1px solid hsla(0, 50%, 40%, 0.15);
		backdrop-filter: blur(8px);
		box-shadow: inset 0 1px 0 hsla(0, 50%, 50%, 0.06);

		opacity: 0;
		transform: translateY(-6px) scale(0.98);
		pointer-events: none;
		transition:
			opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
			transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.unavailable-banner[data-visible='true'] {
		opacity: 1;
		transform: translateY(0) scale(1);
		pointer-events: auto;
	}

	.unavailable-banner svg {
		flex-shrink: 0;
		opacity: 0.85;
	}
	.user-card {
		border-radius: 1rem;
		border: 1px solid hsla(215, 40%, 70%, 0.08);
		background: hsla(215, 40%, 70%, 0.04);
		padding: 1.25rem;
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.25),
			inset 0 1px 0 rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(10px);
	}

	.user-header {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.avatar {
		border-radius: 100%;
		overflow: hidden;
		width: 7rem;
		position: relative;
		aspect-ratio: 1;

		&.banned {
			img {
				filter: grayscale(1) opacity(0.5);
			}
			.banned-status {
				display: flex;
			}
		}
		&:hover {
			img {
				filter: none;
			}
			.banned-status {
				display: none;
			}
		}
		.banned-status {
			display: none;

			position: absolute;
			inset: 0;
			align-items: center;
			justify-content: center;
			background: hsla(0, 70%, 20%, 0.4);
			color: #ff4444;
			backdrop-filter: blur(1px);

			svg {
				filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
			}
		}
	}

	.user-meta {
		min-width: 0;
		width: 100%;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
		width: 100%;
		justify-content: space-between;
	}

	.login {
		font-size: 1.125rem;
		font-weight: 600;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: hsl(210, 20%, 90%);
		letter-spacing: -0.01em;
	}

	.id {
		font-size: 0.875rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: hsl(215, 15%, 50%);
	}

	.user-level {
		display: inline-flex;
		align-items: center;
		padding: 0.2rem 0.55rem;
		border-radius: 9999px;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		border: 1px solid hsla(210, 70%, 60%, 0.2);
		background: hsla(210, 70%, 60%, 0.12);
		color: hsl(210, 70%, 75%);
		white-space: nowrap;
		flex-shrink: 0;
	}

	.details {
		margin-top: 1rem;
		font-size: 0.875rem;
		display: flex;
		justify-content: space-between;

		dt {
			color: hsl(215, 15%, 45%);
			font-size: 0.72rem;
			text-transform: uppercase;
			letter-spacing: 0.04em;
		}

		dd {
			color: hsl(210, 15%, 78%);
			font-weight: 500;
		}
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

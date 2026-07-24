<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import Event from '$lib/assets/svg/event.svelte';
	import Gite from '$lib/assets/svg/gite.svelte';
	import Leaderboard from '$lib/assets/svg/leaderboard.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import FlexContainer from '$lib/components/ui/Flex/FlexContainer.svelte';
	import FlexItem from '$lib/components/ui/Flex/FlexItem.svelte';
	import type { Component } from 'svelte';

	interface Link {
		href: Pathname;
		icon: Component;
		text: string;
	}

	const response = await fetch(
		`https://api.github.com/repos/xySaad/libraone-frontend/contributors`
	);
	const contributors: { login: string; avatar_url: string; html_url: string }[] =
		await response.json();

	const links: Link[] = [
		{ href: '/events', icon: Event, text: 'Events' },
		{ href: '/map', icon: Gite, text: 'Map' },
		{ href: '/events', icon: Leaderboard, text: 'Leaderboard' }
	];
</script>

<nav class="links">
	<FlexContainer gap="10px" minWidth={250} justifyContent="center">
		{#each links as link (link)}
			<FlexItem>
				<a href={resolve(link.href)}>
					<Card>
						<div class="wrap">
							<link.icon />
							<p>{link.text}</p>
						</div>
					</Card>
				</a>
			</FlexItem>
		{/each}
	</FlexContainer>
</nav>

<footer class="contributors-footer">
	<div class="divider"></div>
	<span class="label">Contributors</span>
	<ul class="avatars">
		{#each contributors as contributor (contributor.login)}
			<li class="avatar-item" data-tooltip={contributor.login}>
				<a href={contributor.html_url} target="_blank" rel="noopener noreferrer external">
					<img src={contributor.avatar_url} alt={contributor.login} class="avatar" loading="lazy" />
				</a>
			</li>
		{/each}
	</ul>
</footer>

<style>
	.links {
		padding: 10vw;
		a {
			font-weight: 900;

			.wrap {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
		}
	}

	/* ── Contributors Footer ── */
	.contributors-footer {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem 1.25rem;
	}

	.label {
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.avatars {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0;
	}

	.avatar-item {
		margin-left: -8px;
		transition:
			transform 0.2s ease,
			z-index 0s;
		position: relative;
		z-index: 0;
	}

	.avatar-item:first-child {
		margin-left: 0;
	}

	.avatar-item:hover {
		transform: translateY(-5px) scale(1.12);
		z-index: 10;
	}

	.avatar {
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 2px solid var(--primary);
		background: var(--secondary);
		transition: border-color 0.2s ease;
	}

	.avatar-item:hover .avatar {
		border-color: hsla(215, 40%, 70%, 0.4);
	}
</style>

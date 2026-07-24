<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Close from '$lib/assets/svg/close.svelte';
	import EventIcon from '$lib/assets/svg/event.svelte';
	import FolderDataIcon from '$lib/assets/svg/folder-data.svelte';
	import PersonIcon from '$lib/assets/svg/person.svelte';
	import SearchIcon from '$lib/assets/svg/search.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Spinner from '$lib/components/ui/Spinner.svelte';
	import { Client } from '$lib/graphql/client';
	import { GlobalSearchDocument, type GlobalSearchQuery } from '$lib/graphql/generated';

	let isOpen = $state(false);
	let searchQuery = $state('');
	let activeTab = $state<'all' | 'users' | 'projects' | 'events'>('all');
	let isLoading = $state(false);
	let results = $state<GlobalSearchQuery>({ users: [], objects: [], events: [] });
	let inputEl = $state<HTMLInputElement | null>(null);

	let searchTimeout: ReturnType<typeof setTimeout>;

	const handleSearch = (query: string) => {
		clearTimeout(searchTimeout);
		const q = query.trim();
		if (q.length < 2) {
			results = { users: [], objects: [], events: [] };
			isLoading = false;
			return;
		}

		isLoading = true;
		searchTimeout = setTimeout(async () => {
			try {
				const res = await Client.request(GlobalSearchDocument, { search: `%${q}%` });
				results = res;
			} catch (err) {
				console.error('Global search error:', err);
			} finally {
				isLoading = false;
			}
		}, 250);
	};

	$effect(() => {
		handleSearch(searchQuery);
	});

	const openModal = () => {
		isOpen = true;
		setTimeout(() => inputEl?.focus(), 50);
	};

	const closeModal = () => {
		isOpen = false;
		searchQuery = '';
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			if (isOpen) closeModal();
			else openModal();
		} else if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'f') {
			e.preventDefault();
			if (isOpen) closeModal();
			else openModal();
		} else if (e.key === 'Escape' && isOpen) {
			closeModal();
		}
	};

	const navigateTo = (path: string) => {
		closeModal();
		goto(resolve(path as any));
	};

	const totalResults = $derived(
		(results.users?.length ?? 0) +
			(results.objects?.length ?? 0) +
			(results.events?.length ?? 0)
	);
</script>

<svelte:window onkeydown={handleKeydown} />

<button class="search-trigger" onclick={openModal} aria-label="Global Search">
	<SearchIcon />
	<span class="trigger-text">Search...</span>
	<kbd class="shortcut">Ctrl K</kbd>
</button>

{#if isOpen}
	<div
		class="modal-backdrop"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="button"
		tabindex="-1"
	>
		<div
			class="modal-container"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<div class="search-header">
				<div class="search-input-wrapper">
					<SearchIcon />
					<input
						bind:this={inputEl}
						type="text"
						placeholder="Search users, projects, events..."
						bind:value={searchQuery}
					/>
					{#if isLoading}
						<Spinner size="18px" />
					{:else if searchQuery}
						<button class="clear-btn" onclick={() => (searchQuery = '')}>
							<Close />
						</button>
					{/if}
				</div>
				<button class="close-btn" onclick={closeModal} aria-label="Close search">
					<Close />
				</button>
			</div>

			<div class="filter-tabs">
				<button
					class="tab"
					class:active={activeTab === 'all'}
					onclick={() => (activeTab = 'all')}
				>
					All ({totalResults})
				</button>
				<button
					class="tab"
					class:active={activeTab === 'users'}
					onclick={() => (activeTab = 'users')}
				>
					Users ({results.users?.length ?? 0})
				</button>
				<button
					class="tab"
					class:active={activeTab === 'projects'}
					onclick={() => (activeTab = 'projects')}
				>
					Projects ({results.objects?.length ?? 0})
				</button>
				<button
					class="tab"
					class:active={activeTab === 'events'}
					onclick={() => (activeTab = 'events')}
				>
					Events ({results.events?.length ?? 0})
				</button>
			</div>

			<div class="results-container">
				{#if searchQuery.trim().length < 2}
					<div class="empty-state">
						<p>Type at least 2 characters to search across users, projects, and events.</p>
					</div>
				{:else if isLoading && totalResults === 0}
					<div class="empty-state">
						<Spinner size="24px" />
						<p>Searching...</p>
					</div>
				{:else if totalResults === 0}
					<div class="empty-state">
						<p>No results found for "{searchQuery}"</p>
					</div>
				{:else}
					<!-- Users Section -->
					{#if (activeTab === 'all' || activeTab === 'users') && (results.users?.length ?? 0) > 0}
						<div class="result-category">
							<div class="category-header">
								<PersonIcon />
								<span>Users</span>
								<Badge>{results.users.length}</Badge>
							</div>
							<div class="category-items">
								{#each results.users as user (user.id)}
									<button
										class="result-item"
										onclick={() => navigateTo(`/users/${user.login}`)}
									>
										<div class="user-avatar">
											{#if user.avatarUrl}
												<img src={user.avatarUrl} alt={user.login ?? ''} />
											{:else}
												<PersonIcon />
											{/if}
										</div>
										<div class="item-info">
											<div class="item-title">{user.login}</div>
											<div class="item-subtitle">
												{user.firstName ?? ''} {user.lastName ?? ''}
											</div>
										</div>
										{#if user.campus}
											<Badge>{user.campus}</Badge>
										{/if}
									</button>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Projects / Objects Section -->
					{#if (activeTab === 'all' || activeTab === 'projects') && (results.objects?.length ?? 0) > 0}
						<div class="result-category">
							<div class="category-header">
								<FolderDataIcon />
								<span>Projects & Activities</span>
								<Badge>{results.objects.length}</Badge>
							</div>
							<div class="category-items">
								{#each results.objects as obj (obj.id)}
									<button
										class="result-item"
										onclick={() => navigateTo(`/events/${obj.id}`)}
									>
										<div class="item-icon">
											<FolderDataIcon />
										</div>
										<div class="item-info">
											<div class="item-title">{obj.name}</div>
											<div class="item-subtitle">
												{obj.paths?.[0]?.path ?? ''}
											</div>
										</div>
										<Badge>{obj.type}</Badge>
									</button>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Events Section -->
					{#if (activeTab === 'all' || activeTab === 'events') && (results.events?.length ?? 0) > 0}
						<div class="result-category">
							<div class="category-header">
								<EventIcon />
								<span>Events</span>
								<Badge>{results.events.length}</Badge>
							</div>
							<div class="category-items">
								{#each results.events as ev (ev.id)}
									<button
										class="result-item"
										onclick={() =>
											navigateTo(
												`/events/${ev.objectId ?? ev.object?.id}/${ev.id}`
											)}
									>
										<div class="item-icon">
											<EventIcon />
										</div>
										<div class="item-info">
											<div class="item-title">
												{ev.object?.name ?? ev.description ?? `Event #${ev.id}`}
											</div>
											{#if ev.description && ev.object?.name}
												<div class="item-subtitle">{ev.description}</div>
											{/if}
										</div>
										{#if ev.campus}
											<Badge>{ev.campus}</Badge>
										{/if}
									</button>
								{/each}
							</div>
						</div>
					{/if}
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.search-trigger {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 6px 12px;
		background: var(--surface-bg, rgba(255, 255, 255, 0.06));
		border: 1px solid var(--surface-border, rgba(255, 255, 255, 0.12));
		border-radius: 8px;
		color: var(--text-muted, #a0a0a0);
		cursor: pointer;
		font-size: 0.85rem;
		transition: all 0.2s ease;

		&:hover {
			border-color: var(--surface-border-hover, rgba(255, 255, 255, 0.25));
			color: var(--text-primary, #ffffff);
			background: var(--surface-bg-hover, rgba(255, 255, 255, 0.1));
		}

		.trigger-text {
			font-size: 0.825rem;
		}

		.shortcut {
			font-size: 0.68rem;
			padding: 2px 5px;
			background: rgba(255, 255, 255, 0.08);
			border: 1px solid rgba(255, 255, 255, 0.15);
			border-radius: 4px;
			color: var(--text-muted, #a0a0a0);
			font-family: inherit;
		}
	}

	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.65);
		backdrop-filter: blur(6px);
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding-top: 10vh;
		animation: fadeIn 0.15s ease-out;
	}

	.modal-container {
		width: clamp(320px, 90vw, 680px);
		max-height: 75vh;
		background: var(--surface-bg, #1a1b26);
		border: 1px solid var(--surface-border, rgba(255, 255, 255, 0.15));
		border-radius: 12px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.search-header {
		display: flex;
		align-items: center;
		padding: 14px 16px;
		border-bottom: 1px solid var(--surface-border, rgba(255, 255, 255, 0.1));

		.search-input-wrapper {
			display: flex;
			align-items: center;
			gap: 10px;
			flex: 1;
			color: var(--text-muted, #a0a0a0);

			input {
				width: 100%;
				background: transparent;
				border: none;
				outline: none;
				color: var(--text-primary, #ffffff);
				font-size: 1rem;

				&::placeholder {
					color: var(--text-muted, #a0a0a0);
				}
			}

			.clear-btn {
				background: transparent;
				border: none;
				color: var(--text-muted, #a0a0a0);
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 4px;

				&:hover {
					color: var(--text-primary, #ffffff);
				}
			}
		}

		.close-btn {
			background: transparent;
			border: none;
			color: var(--text-muted, #a0a0a0);
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 6px;
			margin-left: 8px;
			border-radius: 6px;

			&:hover {
				background: rgba(255, 255, 255, 0.1);
				color: var(--text-primary, #ffffff);
			}
		}
	}

	.filter-tabs {
		display: flex;
		gap: 6px;
		padding: 10px 16px;
		border-bottom: 1px solid var(--surface-border, rgba(255, 255, 255, 0.08));
		background: rgba(0, 0, 0, 0.15);

		.tab {
			background: transparent;
			border: 1px solid transparent;
			border-radius: 6px;
			padding: 4px 10px;
			font-size: 0.78rem;
			font-weight: 500;
			color: var(--text-muted, #a0a0a0);
			cursor: pointer;
			transition: all 0.15s ease;

			&:hover {
				color: var(--text-primary, #ffffff);
			}

			&.active {
				background: var(--surface-bg-hover, rgba(255, 255, 255, 0.12));
				border-color: var(--surface-border, rgba(255, 255, 255, 0.2));
				color: var(--text-primary, #ffffff);
			}
		}
	}

	.results-container {
		padding: 12px 16px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-height: 55vh;
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 40px 20px;
		color: var(--text-muted, #a0a0a0);
		font-size: 0.875rem;
		text-align: center;
	}

	.result-category {
		display: flex;
		flex-direction: column;
		gap: 8px;

		.category-header {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 0.75rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			color: var(--text-muted, #a0a0a0);
		}

		.category-items {
			display: flex;
			flex-direction: column;
			gap: 4px;
		}
	}

	.result-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px 12px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		cursor: pointer;
		text-align: left;
		width: 100%;
		color: var(--text-primary, #ffffff);
		transition: all 0.15s ease;

		&:hover {
			background: var(--surface-bg-hover, rgba(255, 255, 255, 0.08));
			border-color: var(--surface-border-hover, rgba(255, 255, 255, 0.15));
			transform: translateX(2px);
		}

		.user-avatar {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			overflow: hidden;
			background: rgba(255, 255, 255, 0.1);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.item-icon {
			width: 32px;
			height: 32px;
			border-radius: 6px;
			background: rgba(255, 255, 255, 0.06);
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--text-muted, #a0a0a0);
			flex-shrink: 0;
		}

		.item-info {
			flex: 1;
			min-width: 0;

			.item-title {
				font-size: 0.875rem;
				font-weight: 500;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.item-subtitle {
				font-size: 0.75rem;
				color: var(--text-muted, #a0a0a0);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

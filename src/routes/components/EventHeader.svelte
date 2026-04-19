<script lang="ts">
	import type { EventTreeNode } from '../+page';

	let { node }: { node: EventTreeNode } = $props();

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		});
	}
</script>

<div class="event-header">
	<div class="event-meta">
		<span class="event-type-tag">{node.object.type ?? 'event'}</span>
		{#if node.path}
			<span class="event-path">{node.path}</span>
		{/if}
	</div>
	<h1 class="event-title">
		{node.object.name}
		#{node.id}
	</h1>
	<div class="event-dates">
		<span class="date-range">
			<span class="date-label">START</span>
			<span class="date-value">{formatDate(node.startAt)}</span>
		</span>
		<span class="date-sep">→</span>
		<span class="date-range">
			<span class="date-label">END</span>
			<span class="date-value">{formatDate(node.endAt)}</span>
		</span>
	</div>
</div>

<style>
	.event-header {
		margin-bottom: 2.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(255 255 255 / 0.07);
	}

	.event-meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.event-type-tag {
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		padding: 0.2em 0.6em;
		background: rgba(30 120 255 / 0.2);
		color: hsl(210 80% 70%);
		border-radius: 4px;
		border: 1px solid rgba(30 120 255 / 0.3);
	}

	.event-path {
		font-size: 0.7rem;
		color: rgba(255 255 255 / 0.25);
		letter-spacing: 0.03em;
	}

	.event-title {
		font-size: 1.75rem;
		font-weight: 400;
		letter-spacing: -0.01em;
		margin: 0 0 1.25rem;
		line-height: 1.2;
	}

	.event-dates {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.date-range {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.date-label {
		font-size: 0.55rem;
		letter-spacing: 0.15em;
		color: rgba(255 255 255 / 0.25);
	}

	.date-value {
		font-size: 0.85rem;
		color: rgba(255 255 255 / 0.8);
	}

	.date-sep {
		color: rgba(255 255 255 / 0.15);
		font-size: 0.9rem;
		margin-top: 0.75rem;
	}
</style>

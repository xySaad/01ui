<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import Carousel from './Carousel.svelte';
	import { eventsMap } from '$lib/state/events';
	import type { Event } from '$lib/types/events';

	const { events }: { events: Event[] } = $props();

	const groupRootEvents = () => {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const eventsByPathMap = new Map<string, Event[]>();
		events.forEach((event) => {
			const key = event.path;
			const eventGroup = eventsByPathMap.get(key);
			if (eventGroup) eventGroup.push(event);
			else eventsByPathMap.set(key, [event]);
		});
		return eventsByPathMap;
	};
</script>

<div class="eventsList">
	{#each groupRootEvents() as [path, group] (path)}
		<section class="group-section">
			<header class="group-header">{path}</header>

			<Carousel>
				{#each group as { id } (id)}
					{@const event = eventsMap.get(id)}
					<div class="event embla__slide">
						{#if event}
							<EventCard {event} />
						{:else}
							Events #{id} Not Found
						{/if}
					</div>
				{/each}
			</Carousel>
		</section>
	{/each}
</div>

<style>
	.eventsList {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.group-section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.group-header {
		font-size: inherit;
		font-weight: inherit;
		margin: 0;
	}

	.event {
		min-width: 300px;
		flex: 0 0 300px;
	}
</style>

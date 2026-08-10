<script lang="ts">
	import { page } from '$app/state';
	import EventCard from '$lib/components/activity/EventCard.svelte';
	import ObjectDetails from '$lib/components/activity/object-attrs/ObjectAttrs.svelte';
	import ObjectCard from '$lib/components/activity/ObjectCard.svelte';
	import ObjectHeader from '$lib/components/activity/ObjectHeader.svelte';
	import SiblingsNavigation from '$lib/components/activity/SiblingsNavigation.svelte';
	import GroupCard from '$lib/components/group/GroupCard.svelte';
	import Suspend from '$lib/components/shared/Suspend.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import FlexContainer from '$lib/components/ui/Flex/FlexContainer.svelte';
	import List from '$lib/components/ui/List.svelte';
	import TabsContainer from '$lib/components/ui/Tabs/TabsContainer.svelte';
	import { Client } from '$lib/graphql/client';
	import {
		GetObjectChildrenDocument,
		GetObjectEventsDocument,
		GetObjectGroupsDocument,
		GetObjectOverviewDocument
	} from '$lib/graphql/generated';
	import { ObjectAttrsType } from '$lib/types/object/attrs';
	import type { PageProps } from './$types';

	const { params }: PageProps = $props();
	const relation = $derived(page.url.searchParams.get('relation') ?? 0);

	const getObjectOverview = async () => {
		const { overview, siblings } = await Client.request(GetObjectOverviewDocument, {
			objectId: +params.objectId,
			relationId: +relation
		});
		return { overview, siblings };
	};
	const getObjectChildren = async () => {
		const { object_by_pk } = await Client.request(GetObjectChildrenDocument, {
			objectId: +params.objectId
		});
		return object_by_pk?.childrenRelation;
	};

	const getObjectData = async () => {
		const { overview, siblings } = await getObjectOverview();
		const children = await getObjectChildren();
		return { overview, children, siblings };
	};

	const getObjectEvents = async () => {
		const { object } = await Client.request(GetObjectEventsDocument, {
			objectId: +params.objectId
		});
		return object[0].events;
	};

	const getObjectGroup = async () => {
		const { object } = await Client.request(GetObjectGroupsDocument, {
			objectId: +params.objectId
		});
		return object[0].groups;
	};
</script>

<article>
	<Suspend data={getObjectData()} loading="kerby">
		{#snippet children({ children, overview, siblings })}
			{#if !overview}
				Not found
			{:else}
				{@const { type, name, campus, events_aggregate, groups_aggregate } = overview}
				{@const eventsCount = events_aggregate.aggregate?.count ?? 0}
				{@const groupsCount = groups_aggregate.aggregate?.count ?? 0}

				<section class="objectHeader">
					<ObjectHeader {campus} {name} {type} />
					{#if siblings?.index?.toString()}
						<SiblingsNavigation
							index={siblings.index}
							siblings={siblings.parent.childrenRelation}
						/>
					{/if}
				</section>
				<TabsContainer
					hidden={{
						Content: children && children.length < 1,
						Events: eventsCount < 1,
						Groups: groupsCount < 1,
						Details: !ObjectAttrsType.some((v) => v === type)
					}}
				>
					{#snippet NavDetails()}details{/snippet}
					{#snippet Details()}
						<ObjectDetails
							path={overview.paths[0].path}
							name={overview.name ?? overview.id.toString()}
						/>
					{/snippet}

					{#snippet NavContent()}
						content
						<Badge>{children?.length}</Badge>
					{/snippet}
					{#snippet Content()}
						{#if children}
							<List items={children}>
								{#snippet Item(childRelation)}
									<ObjectCard relation={childRelation.id} object={childRelation.child} />
								{/snippet}
							</List>
						{/if}
					{/snippet}

					{#snippet NavEvents()}
						events
						<Badge>{eventsCount}</Badge>
					{/snippet}
					{#snippet Events()}
						<div class="events">
							<Suspend data={getObjectEvents()}>
								{#snippet children(events)}
									<FlexContainer gap="10px" minWidth={300}>
										{#snippet children(Flex)}
											{#each events as event (event.id)}
												<Flex>
													<EventCard {event} objectId={overview.id} />
												</Flex>
											{/each}
										{/snippet}
									</FlexContainer>
								{/snippet}
							</Suspend>
						</div>
					{/snippet}

					{#snippet NavGroups()}
						groups
						<Badge>{groupsCount}</Badge>
					{/snippet}
					{#snippet Groups()}
						<Suspend data={getObjectGroup()}>
							{#snippet children(groups)}
								<List items={groups}>
									{#snippet Item(group)}
										<GroupCard {group} title="{group.captain?.login}'s group" />
									{/snippet}
								</List>
							{/snippet}
						</Suspend>
					{/snippet}
				</TabsContainer>
			{/if}
		{/snippet}
	</Suspend>
</article>

<style>
	article {
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		display: flex;

		overflow-y: scroll;
		overflow-x: hidden;

		.objectHeader {
			display: flex;
		}
		.events {
			display: flex;
			justify-content: center;
		}
	}
</style>

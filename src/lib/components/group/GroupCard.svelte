<script lang="ts">
	import Crown from '$lib/assets/svg/crown.svelte';
	import GroupsIcon from '$lib/assets/svg/groups.svelte';
	import UserAvatar from '$lib/components/image/UserAvatar.svelte';
	import Divider from '$lib/components/shared/Divider.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import { Group_Status_Enum, type GetObjectGroupsQuery } from '$lib/graphql/generated';
	import CardHeader from '../Card/CardHeader.svelte';
	import Badge from '../ui/Badge.svelte';
	import PrivacyTip from '$lib/assets/svg/privacy-tip.svelte';
	import Hail from '$lib/assets/svg/hail.svelte';
	import DoneOutline from '$lib/assets/svg/done_outline.svelte';
	import IncompleteCircle from '$lib/assets/svg/incomplete-circle.svelte';
	const statusIconMap = {
		[Group_Status_Enum.Setup]: Hail,
		[Group_Status_Enum.Working]: IncompleteCircle,
		[Group_Status_Enum.Audit]: PrivacyTip,
		[Group_Status_Enum.Finished]: DoneOutline
	};

	interface Props {
		group: GetObjectGroupsQuery['object'][number]['groups'][number];
		title?: string;
	}

	const { group, title: groupTitle = '-' }: Props = $props();

	const StatusIcon = $derived(statusIconMap[group.status]);
	const memberLabel = $derived(group.members.length === 1 ? 'member' : 'members');
</script>

<Card padding="sm">
	<div class="headerWrap" data-tooltip={groupTitle}>
		<CardHeader>
			{#snippet icon()}
				<GroupsIcon />
			{/snippet}
			{#snippet title()}
				<div class="title">
					<div class="text">{groupTitle}</div>
					<Badge>{group.members.length} {memberLabel}</Badge>
				</div>
			{/snippet}
		</CardHeader>
	</div>

	<Divider margin="0 0 0 auto" />

	<div class="members">
		{#each group.members as member (member.user?.id)}
			{@const user = member.user}
			{@const isCaptain = user?.id === group.captain?.id}
			{@const memberTooltip = `${member.user?.login}${isCaptain ? ' (captain)' : ''}`}
			<div class="member" data-tooltip={memberTooltip}>
				{#if isCaptain}
					<div class="crown">
						<Crown />
					</div>
				{/if}
				<div class="avatar">
					<UserAvatar
						avatarUrl={user?.avatarUrl}
						userLogin={user?.login}
						banned={!user?.canAccessPlatform}
					/>
				</div>
			</div>
		{/each}
	</div>
	<Divider />
	<div class="status" data-tooltip="status">
		{group.status}
		<StatusIcon />
	</div>
</Card>

<style>
	.headerWrap {
		width: 100%;
		.title {
			display: flex;
			justify-content: space-between;
			gap: 10px;
			width: 100%;

			.text {
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}

	.members {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;

		.member {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			width: fit-content;

			.avatar {
				width: 50px;
				height: 50px;
			}
			.crown {
				color: var(--success);
			}
		}
	}
	.status {
		margin-left: auto;
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: end;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-value);
	}
</style>

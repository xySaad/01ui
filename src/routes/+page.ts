import type { GetEventTreeQuery } from '$lib/graphql/generated';

type RawEvent = GetEventTreeQuery['event'][number];

export type EventUser = RawEvent['usersRelation'][number];

export type UsersByDate = Record<string, EventUser[]>;

export interface EventTreeNode {
	id: number;
	path: string | null;
	parentId: number | null | undefined;
	object: RawEvent['object'];
	startAt: string;
	endAt: string;
	children: EventTreeNode[];
	// Only populated on leaf nodes
	usersByDate: UsersByDate;
}

function buildEventTree(events: RawEvent[]): EventTreeNode[] {
	const nodeMap = new Map<number, EventTreeNode>();

	// 1. Create all nodes
	for (const ev of events) {
		nodeMap.set(ev.id, {
			id: ev.id,
			path: ev.path,
			parentId: ev.parentId,
			object: ev.object,
			startAt: ev.startAt,
			endAt: ev.endAt,
			children: [],
			usersByDate: {}
		});
	}

	const roots: EventTreeNode[] = [];

	// 2. Wire up parent → children
	for (const node of nodeMap.values()) {
		if (node.parentId !== null && node.parentId !== undefined && nodeMap.has(node.parentId)) {
			nodeMap.get(node.parentId)!.children.push(node);
		} else {
			roots.push(node);
		}
	}

	// 3. On leaf nodes, group usersRelation by date
	const rawMap = new Map(events.map((e) => [e.id, e]));

	function annotateLeaves(node: EventTreeNode) {
		if (node.children.length === 0) {
			// Leaf — group users by join date
			const users = rawMap.get(node.id)?.usersRelation ?? [];
			node.usersByDate = users.reduce<UsersByDate>((acc, eu) => {
				const date = eu.createdAt.split('T')[0];
				(acc[date] ??= []).push(eu);
				return acc;
			}, {});
		} else {
			node.children.forEach(annotateLeaves);
		}
	}

	roots.forEach(annotateLeaves);

	return roots;
}

import { Client } from '$lib/graphql/client';
import { GetEventTreeDocument } from '$lib/graphql/generated';

export const load = async () => {
	const { event } = await Client.request(GetEventTreeDocument);
	const eventTree = buildEventTree(event);
	return { eventTree };
};

import { Client } from '$lib/graphql/client';
import { GetUsersDocument } from '$lib/graphql/generated';
import type { User } from '$lib/types/user';

export const { user_public_view, record_public_view } = await Client.request(GetUsersDocument);

export const usersMap = new Map<number, User>();
export const recordsMap = new Map<number, string>();
for (const record of record_public_view) {
	if (!record.userId) continue;
	recordsMap.set(record.userId, record.endAt);
}

for (const user of user_public_view) {
	if (!user.id) continue;
	usersMap.set(user.id, user);
}

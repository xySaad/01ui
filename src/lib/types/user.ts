import type { GetUsersQuery } from '$lib/graphql/generated';

export type User = GetUsersQuery['user_public_view'][number];
export type UserRecord = GetUsersQuery['record_public_view'][number];

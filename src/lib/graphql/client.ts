import { GraphQLClient } from 'graphql-request';
import { LoadJWT } from './jwt';

export const Client = new GraphQLClient(
	'https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql',
	{
		headers: {
			Authorization: `Bearer ${await LoadJWT()}`
		}
	}
);

import type { CodegenConfig } from '@graphql-codegen/cli';
import { LoadJWT } from './src/lib/graphql/jwt';

const config: CodegenConfig = {
	documents: ['src/**/*.gql'],
	schema: {
		'https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql': {
			headers: { Authorization: `Bearer ${await LoadJWT()}` }
		}
	},
	generates: {
		'./src/lib/graphql/generated.ts': {
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				useTypeImports: true
			}
		}
	}
};

export default config;

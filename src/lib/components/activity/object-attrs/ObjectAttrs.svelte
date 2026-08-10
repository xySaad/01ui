<script lang="ts">
	import api from '$lib/api';
	import Suspend from '$lib/components/shared/Suspend.svelte';
	import Wordmark from '$lib/components/shared/Wordmark.svelte';
	import Markdown from '$lib/components/ui/Markdown/Markdown.svelte';
	import TabsContainer from '$lib/components/ui/Tabs/TabsContainer.svelte';
	import { ObjectAttrsSchema } from '$lib/types/object/attrs';
	import ObjectOverview from './ObjectOverview.svelte';
	import TesterValidation from './validation/TesterValidation.svelte';
	import UserAuditValidation from './validation/UserAuditValidation.svelte';
	interface Props {
		name: string;
		path: string;
	}
	const { path, name }: Props = $props();

	const getObjectAttrs = async (path: string) => {
		const attrs = await api.LIBRAONE.object(path);
		return ObjectAttrsSchema.parse(attrs);
	};
</script>

<Suspend data={getObjectAttrs(path)}>
	{#snippet children(attrs)}
		{@const details = attrs.attrs}
		<article>
			<ObjectOverview {attrs} />
			<TabsContainer>
				{#snippet NavSubject()}
					Subject
				{/snippet}
				{#snippet Subject()}
					<Markdown
						fileName="{name}.md"
						src={{ url: `https://learn.zone01oujda.ma${details.subject}` }}
					>
						{#snippet Title()}<Wordmark>Subject</Wordmark>{/snippet}
					</Markdown>
				{/snippet}

				{#snippet NavValidation()}
					Validation
				{/snippet}
				{#snippet Validation()}
					{#each details.validations as validation (validation)}
						{#if validation.type === 'user_audit'}
							<UserAuditValidation {validation} fileName="{name}-audit.md" />
						{:else if validation.type === 'tester'}
							<TesterValidation {validation} />
						{/if}
					{/each}
				{/snippet}
			</TabsContainer>
		</article>
	{/snippet}
</Suspend>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

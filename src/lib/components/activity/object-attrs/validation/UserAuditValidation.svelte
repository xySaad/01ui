<script lang="ts">
	import Suspend from '$lib/components/shared/Suspend.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Client } from '$lib/graphql/client';
	import { GetValidationMarkdownsDocument } from '$lib/graphql/generated';
	import type { UserAuditValidation } from '$lib/types/object/attrs/validation';
	import type { Snippet } from 'svelte';
	import AuditCheckboxList from './AuditCheckboxList.svelte';
	const QUESTION_PREFIX = '#'.repeat(6);
	const isQuestion = (line: string) => line.startsWith(QUESTION_PREFIX);

	interface Props {
		validation: UserAuditValidation;
		fileName: string;
		Title: Snippet;
	}
	const { validation, fileName, Title }: Props = $props();
	const { form, preQuestions, postQuestions } = $derived(validation);

	const questionsFromMarkdown = (markdown: string) => {
		const questions: string[] = [''];

		for (const line of markdown.split('\n')) {
			const index = questions.length - 1;
			if (questions[index] === undefined) questions[index] = line + '\n';
			else questions[index] += line + '\n';

			if (isQuestion(line)) questions.push('');
		}
		questions.length -= 1; // remove last empty line
		return questions;
	};

	const getAuditMarkdowns = async () => {
		const { pre, post } = await Client.request(GetValidationMarkdownsDocument, {
			pre: preQuestions ?? [],
			post: postQuestions ?? []
		});

		if (form) {
			const formResp = await fetch(`https://learn.zone01oujda.ma${form}`);
			const audit = await formResp.text();
			return { pre, audit: questionsFromMarkdown(audit), post };
		}
		return { pre, post };
	};

	let currentIndex = $state(0);
</script>

{@render Title()}
<Suspend data={getAuditMarkdowns()}>
	{#snippet children({ pre, audit, post })}
		<AuditCheckboxList title="Pre-Audit" bind:currentIndex questions={pre.map((v) => v.content)} />
		<AuditCheckboxList
			title="Audit"
			bind:currentIndex
			questions={audit ?? []}
			lastIndex={pre.length}
		/>
		{@const auditLength = audit?.length ?? 0}
		<AuditCheckboxList
			title="Post-Audit"
			bind:currentIndex
			questions={post.map((v) => v.content)}
			lastIndex={pre.length + auditLength}
		/>
		{#if currentIndex > pre.length + auditLength + post.length - 1}
			<Button style="color: var(--success); background: var(--success-bg);">Validate</Button>
		{:else}
			<Button style="color: var(--error); background: var(--error-bg);">Fail</Button>
		{/if}
	{/snippet}
</Suspend>

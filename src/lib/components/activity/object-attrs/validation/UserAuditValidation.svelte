<script lang="ts">
	import Suspend from '$lib/components/shared/Suspend.svelte';
	import Wordmark from '$lib/components/shared/Wordmark.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import MarkdownMenu from '$lib/components/ui/Markdown/MarkdownMenu.svelte';
	import { Client } from '$lib/graphql/client';
	import { GetValidationMarkdownsDocument } from '$lib/graphql/generated';
	import type { UserAuditValidation } from '$lib/types/object/attrs/validation';
	import AuditCheckboxList from './AuditCheckboxList.svelte';
	const QUESTION_PREFIX = '#'.repeat(6);
	const isQuestion = (line: string) => line.startsWith(QUESTION_PREFIX);

	interface Props {
		validation: UserAuditValidation;
		fileName: string;
	}
	const { validation, fileName }: Props = $props();
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
		const resp = await Client.request(GetValidationMarkdownsDocument, {
			pre: preQuestions ?? [],
			post: postQuestions ?? []
		});

		const pre = resp.pre.map((m) => m.content);
		const post = resp.post.map((m) => m.content);

		if (form) {
			const formResp = await fetch(`https://learn.zone01oujda.ma${form}`);
			const audit = await formResp.text();
			return { pre, audit, post };
		}
		return { pre, post, audit: '' };
	};

	let currentIndex = $state(0);
	let maxWidth = $state(100);
</script>

<article class="validation">
	<Suspend data={getAuditMarkdowns()}>
		{#snippet children({ pre, audit, post })}
			{@const auditQuestions = questionsFromMarkdown(audit)}

			{#if form}
				{@const source = [...pre, audit, ...post].join('\n')}
				<header>
					<Wordmark>Audit Validation</Wordmark>
					<MarkdownMenu bind:maxWidth {source} {fileName} />
				</header>
			{/if}

			<section class="checklist" style:max-width="{maxWidth}%">
				{#if pre.length > 0}
					<AuditCheckboxList title="Pre-Audit" bind:currentIndex questions={pre} />
				{/if}
				{#if auditQuestions.length > 0}
					<AuditCheckboxList
						title="Audit"
						bind:currentIndex
						questions={auditQuestions}
						lastIndex={pre.length}
					/>
				{/if}
				{#if post.length > 0}
					<AuditCheckboxList
						title="Post-Audit"
						bind:currentIndex
						questions={post}
						lastIndex={pre.length + auditQuestions.length}
					/>
				{/if}
				{#if currentIndex > pre.length + auditQuestions.length + post.length - 1}
					<Button style="color: var(--success); background: var(--success-bg);">Validate</Button>
				{:else}
					<Button style="color: var(--error); background: var(--error-bg);">Fail</Button>
				{/if}
			</section>
		{/snippet}
	</Suspend>
</article>

<style>
	article {
		.checklist {
			min-width: 0;
			margin: auto;
		}
		header {
			display: flex;
			align-items: center;
			padding: 0 10px;
		}
	}
</style>

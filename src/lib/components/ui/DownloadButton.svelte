<script lang="ts">
	import CheckMark from '$lib/assets/svg/check-mark.svelte';
	import Download from '$lib/assets/svg/download.svelte';
	import ActionButton from '$lib/components/ui/ActionButton.svelte';

	type Props = {
		data: string;
		label?: string;
		fileName: string;
	};

	let { data, label, fileName }: Props = $props();

	const download = async () => {
		const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		location.assign(`/api/download?url=${encodeURIComponent(url)}&name=${fileName}`);
	};
</script>

<ActionButton onclick={download}>
	<span>
		<Download />
		Download {label}
	</span>
	{#snippet success()}
		<span>
			<CheckMark />
			{label} Downloaded
		</span>
	{/snippet}
</ActionButton>

<style>
	span {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>

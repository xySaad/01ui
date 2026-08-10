<script lang="ts">
	import { type Snippet, type Component } from 'svelte';
	import FlexItem from './FlexItem.svelte';

	type FlexComponent = Component<{ children: Snippet; grow?: boolean; overrideMinWidth?: number }>;

	interface Props {
		children: Snippet<[FlexComponent]>;
		minWidth: number;
		gap: string;
		justifyContent?: string;
	}

	const { children, minWidth: inputMinWidth, gap, justifyContent }: Props = $props();

	let childrenCount = $state(0);
	let totalMinWidth = $state(0);

	const calculateSize = (actualMinWidth: number) => {
		const totalGap = `calc(${gap} * ${childrenCount})`;
		const rawThreshold = totalMinWidth;
		const threshold = `${rawThreshold}px`;

		const diff = `calc(${threshold} + ${totalGap} - 100%)`;
		const sign = `clamp(-1px, ${diff}, 1px)`;

		const calculatedMinWidth = `${actualMinWidth}px`;
		const maxWidth = `clamp(
            ${calculatedMinWidth},
            calc(${sign} * ${rawThreshold} + ${totalGap}),
            100%
        )`;

		return { minWidth: calculatedMinWidth, maxWidth: maxWidth };
	};

	const Flex: FlexComponent = (internals, props) => {
		const actualMinWidth = props.overrideMinWidth ?? inputMinWidth;
		childrenCount += 1;
		totalMinWidth += actualMinWidth;

		return FlexItem(internals, {
			children: props.children,
			get minWidth() {
				return calculateSize(actualMinWidth).minWidth;
			},
			get maxWidth() {
				return calculateSize(actualMinWidth).maxWidth;
			},
			get grow() {
				return props.grow;
			}
		});
	};
</script>

<div style:gap style:justify-content={justifyContent}>
	{@render children(Flex)}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
</style>

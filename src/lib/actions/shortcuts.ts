export function ctrlAltF(node: HTMLElement) {
	function handleKeydown(e: KeyboardEvent) {
		if (e.ctrlKey && e.key === 'f' && e.altKey) {
			e.preventDefault();
			node.focus();
		}
	}

	window.addEventListener('keydown', handleKeydown);

	return {
		destroy() {
			window.removeEventListener('keydown', handleKeydown);
		}
	};
}

export const formatDate = (d: string): string =>
	new Date(d).toLocaleString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	});

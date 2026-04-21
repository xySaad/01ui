export const formatDate = (d: string): string =>
	new Date(d).toLocaleString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	});

const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? '' : 's'}`;
export function timeUntil(dateStr: string): string {
	const now = new Date();
	const end = new Date(dateStr);

	let years = end.getFullYear() - now.getFullYear();
	let months = end.getMonth() - now.getMonth();
	let days = end.getDate() - now.getDate();

	if (days < 0) {
		months--;
		const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
		days += prevMonth.getDate();
	}
	if (months < 0) {
		years--;
		months += 12;
	}

	if (end <= now) return 'Ended';

	const parts = [];

	if (years > 0) parts.push(plural(years, 'year'));
	if (months > 0) parts.push(plural(months, 'month'));
	if (days > 0) parts.push(plural(days, 'day'));

	return parts.length ? parts.join(' ') : 'Today';
}

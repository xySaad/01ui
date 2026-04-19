export type Validation = {
	form?: string;
	type: string;
	testImage: string;
};

export type Event = {
	name: string;
	path: string;
	type: string;
	children?: { [k: string]: Event };
	attrs?: {
		subject?: string;
		validations?: Validation[];
	};
};

export type SearchResult = {
	highlight: string[];
} & Event;
export const fetchObject = async () => {
	const resp = await fetch(
		'https://cors.lil-hacker.workers.dev/proxy?url=https://learn.zone01oujda.ma/api/object/oujda'
	);

	const json = await resp.json();
	return json;
};

const ObjectData: Event = await fetchObject();
function normalizePath(path: string): string {
	return new URL(path, 'http://x').pathname;
}
export const GetEvent = (path: string) => {
	const event = findByPath(ObjectData, path);

	if (event?.attrs?.subject)
		event.attrs.subject = event.attrs.subject.replace(/^\/markdown(\/raw)?/g, '/api/content');

	event?.attrs?.validations?.forEach(
		(v) => (v.form = v.form?.replace(/^\/markdown(\/raw)?/g, '/api/content'))
	);

	return event;
};

function findByPath(node: Event, path: string): Event | undefined {
	if (normalizePath(node.path) === normalizePath(path)) return node;

	for (const child of Object.values(node.children ?? {})) {
		const found = findByPath(child, path);
		if (found) return found;
	}
}

export const SearchEvent = (query: string) => {
	if (query.length < 1) return;
	const results: SearchResult[] = [];
	recursiveEventSearch(results, ObjectData, query);
	return results;
};

const recursiveEventSearch = (queue: SearchResult[], object: Event, query: string) => {
	for (const key in object.children) {
		const child = object.children[key];

		if (query.startsWith('/')) {
			if (child.path.startsWith(query)) {
				const highlight = key.split(query);
				queue.push({ ...child, highlight });
			}
		} else if (normalizeAndMatch(key, query)) {
			const highlight = key.split(query);
			queue.push({ ...child, highlight });
		}

		recursiveEventSearch(queue, child, query);
	}
};

const normalizeAndMatch = (a: string, b: string) => {
	a = normalize(a);
	b = normalize(b);
	if (a.includes(b)) return true;
	return false;
};

const normalize = (str: string) =>
	str.toLowerCase().replaceAll(/ +/g, ' ').trim().split('-').join(' ');

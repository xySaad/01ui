import type { Nodes as HastNodes } from 'hast';
import { fromHtml } from 'hast-util-from-html';
import { toHtml } from 'hast-util-to-html';
import DOMPurify from 'dompurify';

function isAbsoluteUrl(url: string): boolean {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}
//TODO: use AST token to identify URLs instead of hardcoding src and href properties
export function resolveRelativeUrl(node: HastNodes, baseURL: string): HastNodes {
	if (node.type !== 'element') return node;

	const urlKey = node.properties.href ? 'href' : node.properties.src ? 'src' : null;
	if (urlKey === null) return node;

	const url = node.properties[urlKey];
	if (url === undefined) return node;

	const resolvedURL = isAbsoluteUrl(url) ? url : new URL(url, baseURL).toString();
	node.properties[urlKey] = resolvedURL;
	return node;
}

export function sanitizeNode(node: HastNodes) {
	const dirty = toHtml(node, { allowDangerousHtml: true });
	const clean = DOMPurify.sanitize(dirty);
	const tree = fromHtml(clean, { fragment: true });
	return tree;
}

// Framework-neutral icon API: return SVG markup strings that can be
// rendered by consumers in their chosen framework.

export type IconAttrs = Record<string, string | number | boolean>;

const allowedAttrs = new Set([
	'width', 'height', 'class', 'fill', 'stroke', 'stroke-width', 'viewBox', 'role', 'aria-hidden', 'aria-label', 'focusable'
]);

function escapeHtml(value: string) {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const DEFAULT_SVG = (attrs: IconAttrs = {}) => {
	const attrStr = Object.entries(attrs)
		.filter(([k]) => allowedAttrs.has(k))
		.map(([k, v]) => `${k}="${escapeHtml(String(v))}"`)
		.join(' ');
	return `<svg ${attrStr} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="24" height="24" fill="currentColor"/></svg>`;
};

// Minimal placeholder map — replace or extend with real SVGs as needed.
const ICONS: Record<string, (attrs?: IconAttrs) => string> = {
	placeholder: (attrs?: IconAttrs) => DEFAULT_SVG(attrs),
};

export function getIconSvg(name: string, attrs?: IconAttrs): string {
	const fn = ICONS[name] || ICONS.placeholder;
	return fn(attrs);
}

export const availableIcons = Object.keys(ICONS);

export default getIconSvg;

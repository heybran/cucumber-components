/**
 *
 * @param {Object} options
 * @param {HTMLElement} options.element
 * @param {HTMLElement} options.target
 * @param {'top'|'bottom'|'left'|'right'} options.position
 * @param {number} options.offset
 */
export default function calculatePosition({
	element,
	target,
	position,
	offset,
}) {
	const { left, top } = target.getBoundingClientRect();
	let x;
	let y;
	const { width: elementWidth, height: elementHeight } =
		element.getBoundingClientRect();
	const { width: targetWidth, height: targetHeight } =
		target.getBoundingClientRect();
	if (position === "top") {
		y = top - elementHeight - offset;
		x = left + targetWidth / 2 - elementWidth / 2;
		// @ts-ignore
		if (element.hasArrow) {
			element.setAttribute("arrow-position", "bottom");
		}
		if (y < 2) {
			// 2 => breathing space
			// y = top + targetHeight + offset;
			return calculatePosition({ element, target, position: "bottom", offset });
		}
	} else if (position === "bottom") {
		y = top + targetHeight + offset;
		x = left + targetWidth / 2 - elementWidth / 2;
		// @ts-ignore
		if (element.hasArrow) {
			element.setAttribute("arrow-position", "top");
		}
		if (y + elementHeight + 2 > window.innerHeight) {
			// y = top - elementHeight - offset;
			return calculatePosition({ element, target, position: "top", offset });
		}
	} else if (position === "left") {
		y = top + targetHeight / 2 - elementHeight / 2;
		x = left - offset - elementWidth;
		// @ts-ignore
		if (element.hasArrow) {
			element.setAttribute("arrow-position", "right");
		}
	} else if (position === "right") {
		y = top + targetHeight / 2 - elementHeight / 2;
		x = left + targetWidth + offset;
		// @ts-ignore
		if (element.hasArrow) {
			element.setAttribute("arrow-position", "left");
		}
	}

	return { x, y };
}

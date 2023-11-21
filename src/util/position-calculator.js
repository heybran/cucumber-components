/**
 *
 * @param {Object} options
 * @param {HTMLElement} options.popover
 * @param {HTMLElement} options.anchorElement
 * @param {'top'|'bottom'|'left'|'right'|'bottom-end'|'bottom-start'} options.position
 * @param {number} options.offset
 */
export default function calculatePosition({
	popover,
	anchorElement,
	position,
	offset,
}) {
	const { left, top, width: anchorElementWidth, height: anchorElementHeight } = anchorElement.getBoundingClientRect();
	let x;
	let y;
	const { width: popoverWidth, height: popoverHeight } = popover.getBoundingClientRect();

	switch(position) {
		case 'top':
			y = top - popoverHeight - offset;
			x = left + anchorElementWidth / 2 - popoverWidth / 2;
		
			if (y < 2) {
				// 2 => breathing space
				// y = top + targetHeight + offset;
				return calculatePosition({ popover, anchorElement, position: "bottom", offset });
			}
			break;

		case 'left':
			y = top + anchorElementHeight / 2 - popoverHeight / 2;
			x = left - offset - popoverWidth;
			break;

		case 'bottom':
			y = top + anchorElementHeight + offset;
			x = left - ((popoverWidth - anchorElementWidth) / 2);
			// x = left;
			console.log(x, left, popoverWidth, anchorElementWidth);
		
			if (y + popoverHeight + 2 > window.innerHeight) {
				// y = top - elementHeight - offset;
				return calculatePosition({ popover, anchorElement, position: "top", offset });
			}
			break;

		case 'right':
			y = top + anchorElementHeight / 2 - popoverHeight / 2;
			x = left + anchorElementWidth + offset;
			break;

		case "bottom-start":
			y = top + anchorElementHeight + offset;
			x = left;
			break;

		case 'bottom-end':
			y = top + anchorElementHeight + offset;
			x = left - ((popoverWidth - anchorElementWidth));
			break;
	}

	return { x, y, anchorElementWidth };
}

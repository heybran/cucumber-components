/**
 *
 * @param {Object} options
 * @param {HTMLElement} options.popover
 * @param {HTMLElement} options.anchorElement
 * @param {'top'|'bottom'|'left'|'right'|'top-start'|'top-center'|'top-end'|'bottom-start'|'bottom-center'|'bottom-end'} options.position
 * @param {number} options.offset
 * @param {boolean} [options.reverse=false] - Track the placement of popover, as we need to update arrow position.
 */
export default function calculatePosition({
  popover,
  anchorElement,
  position,
  offset,
  reverse = false,
}) {
  const {
    left,
    top,
    width: anchorElementWidth,
    height: anchorElementHeight,
  } = anchorElement.getBoundingClientRect();
  let x;
  let y;
  const { width: popoverWidth, height: popoverHeight } =
    popover.getBoundingClientRect();

  switch (position) {
    case "top-center":
      y = top - popoverHeight - offset;
      x = left + anchorElementWidth / 2 - popoverWidth / 2;

      if (y < 2) {
        // 2 => breathing space
        // y = top + targetHeight + offset;
        return calculatePosition({
          popover,
          anchorElement,
          position: "bottom-center",
          offset,
          reverse: true,
        });
      }
      break;

    case "left":
      y = top + anchorElementHeight / 2 - popoverHeight / 2;
      x = left - offset - popoverWidth;
      break;

    case "bottom-center":
      y = top + anchorElementHeight + offset;
      x = left - (popoverWidth - anchorElementWidth) / 2;

      if (y + popoverHeight + 2 > window.innerHeight) {
        // y = top - elementHeight - offset;
        return calculatePosition({
          popover,
          anchorElement,
          position: "top-center",
          offset,
          reverse: true,
        });
      }
      break;

    case "right":
      y = top + anchorElementHeight / 2 - popoverHeight / 2;
      x = left + anchorElementWidth + offset;
      break;

    case "top-start":
      y = top - popoverHeight - offset;
      x = left;

      if (y < 2) {
        // 2 => breathing space
        // y = top + targetHeight + offset;
        return calculatePosition({
          popover,
          anchorElement,
          position: "bottom-start",
          offset,
          reverse: true,
        });
      }
      break;

    case "bottom-start":
      y = top + anchorElementHeight + offset;
      x = left;

      if (y + popoverHeight + 2 > window.innerHeight) {
        // y = top - elementHeight - offset;
        return calculatePosition({
          popover,
          anchorElement,
          position: "top-start",
          offset,
          reverse: true,
        });
      }
      break;

    case "top-end":
      y = top - popoverHeight - offset;
      x = left - (popoverWidth - anchorElementWidth);

      if (y < 2) {
        // 2 => breathing space
        // y = top + targetHeight + offset;
        return calculatePosition({
          popover,
          anchorElement,
          position: "bottom-end",
          offset,
          reverse: true,
        });
      }
      break;

    case "bottom-end":
      y = top + anchorElementHeight + offset;
      x = left - (popoverWidth - anchorElementWidth);

      if (y + popoverHeight + 2 > window.innerHeight) {
        // y = top - elementHeight - offset;
        return calculatePosition({
          popover,
          anchorElement,
          position: "top-end",
          offset,
          reverse: true,
        });
      }
      break;
  }

  return { x, y, anchorElementWidth, reverse };
}

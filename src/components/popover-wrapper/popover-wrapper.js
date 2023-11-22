import css from "./popover-wrapper.css?inline";
import BaseElement from "../../shared/base-element.js";
import calculatePosition from "../../util/position-calculator.js";

/**
 * @element cc-popover-wrapper
 *
 * @slot trigger - button that opens the popover
 * @slot - the popover element.
 */
export default class CucumberPopover extends BaseElement {
  /** @type {string} */
  static tagName = "cc-popover-wrapper";

  connectedCallback() {
    this.render('<slot name="trigger"></slot><slot></slot>', css);
    this.trigger = this.getAssignedElementsFor(this.getSlot("trigger"))[0];
    this.popoverElement = this.getAssignedElementsFor(this.defaultSlot)[0];
    this.trigger.addEventListener("click", this.handleTriggerClick.bind(this));

    this.addEventListener("popoverOpened", (event) => {
      window.addEventListener("wheel", this.updatePosition);
    });
    /**
     * Need to remove the event listener when popover is closed.
     */
    this.addEventListener("popoverClosed", (event) => {
      window.removeEventListener("wheel", this.updatePosition);
    });
  }

  handleTriggerClick(event) {
    this.updatePosition(event);
    this.popoverElement.toggleAttribute("open");
  }

  updatePosition = (event) => {
    const position = this.popoverElement.getAttribute("placement");
    const { x, y, anchorElementWidth, reverse } = calculatePosition({
      popover: this.popoverElement,
      anchorElement: this.trigger,
      position: position ?? "bottom-center",
      offset: 10,
    });
    this.popoverElement.style.setProperty("--left", `${x}px`);
    this.popoverElement.style.setProperty("--top", `${y}px`);
    this.popoverElement.style.setProperty(
      "--anchor-element-width",
      `${anchorElementWidth}px`,
    );
    if (reverse) {
      this.popoverElement?.setAttribute('reverse', '');
    } else {
      this.popoverElement?.removeAttribute('reverse');
    }
  };
}

if (!customElements.get(CucumberPopover.tagName)) {
  customElements.define(CucumberPopover.tagName, CucumberPopover);
}

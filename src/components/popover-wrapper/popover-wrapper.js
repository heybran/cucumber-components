import css from "./popover-wrapper.css?inline";
import BaseElement from "../../shared/base-element.js";
import calculatePosition from "../../util/position-calculator.js";

/**
 * @element cc-popover-wrapper
 *
 * @slot trigger - button that opens the popover.
 * @slot - the popover element.
 */
export default class CucumberPopoverWrapper extends BaseElement {
  /** @type {string} */
  static tagName = "cc-popover-wrapper";

  get triggerProp() {
    return this.getAttribute("trigger");
  }

  connectedCallback() {
    this.render('<slot name="trigger"></slot><slot></slot>', css);
    this.trigger = this.getAssignedElementsFor(this.getSlot("trigger"))[0];
    this.popoverElement = this.getAssignedElementsFor(this.defaultSlot)[0];

    this.addEventListener("popoverOpened", (event) => {
      window.addEventListener("wheel", this.updatePosition);
    });
    /**
     * Need to remove the event listener when popover is closed.
     */
    this.addEventListener("popoverClosed", (event) => {
      window.removeEventListener("wheel", this.updatePosition);
    });
    if (this.triggerProp === "hover") {
      this.trigger.addEventListener("mouseenter", (event) =>
        this.handleTrigger(event, "open")
      );
      this.trigger.addEventListener("mouseleave", (event) =>
        this.handleTrigger(event, "close")
      );
    }
    if (this.triggerProp === "focus") {
      this.trigger.addEventListener("focus", (event) =>
        this.handleTrigger(event, "open")
      );
      this.trigger.addEventListener("blur", (event) =>
        this.handleTrigger(event, "close")
      );
    } else {
      this.trigger.addEventListener("click", (event) => {
        /**
         * if the trigger is hover, the click event should not be handled.
         */
        if (this.triggerProp === "hover") return;
        this.handleTrigger(event, "toggle");
      });
      document.addEventListener("click", this.closeWhenClickOutside);
    }
  }

  /**
   * Closes the popover when a click event occurs outside of it.
   *
   * @param {Event} event - The click event that occurred.
   * @return {void} This function does not return anything.
   */
  closeWhenClickOutside = (event) => {
    if (!this.contains(event.target)) {
      this.handleTrigger(event, "close");
    }
  };

  /**
   * Handle the trigger event.
   *
   * @param {Event} event
   * @param {'open' | 'close' | 'toggle'} type
   */
  handleTrigger(event, type) {
    this.updatePosition(event);
    // 'openPopover' | 'closePopover' | 'togglePopover' in popover.js
    this.popoverElement[`${type}Popover`]();
  }

  updatePosition = (event) => {
    const position = this.popoverElement.getAttribute("placement");
    const { x, y, anchorElementWidth, anchorElementHeight, reverse } =
      calculatePosition({
        popover: this.popoverElement,
        anchorElement: this.trigger,
        position: position ?? "bottom-center",
        offset: 10,
      });
    this.popoverElement.style.setProperty("--left", `${x}px`);
    this.popoverElement.style.setProperty("--top", `${y}px`);
    this.popoverElement.style.setProperty(
      "--anchor-element-width",
      `${anchorElementWidth}px`
    );
    this.popoverElement.style.setProperty(
      "--anchor-element-height",
      `${anchorElementHeight}px`
    );
    if (reverse) {
      this.popoverElement?.setAttribute("reverse", "");
    } else {
      this.popoverElement?.removeAttribute("reverse");
    }
  };
}

if (!customElements.get(CucumberPopoverWrapper.tagName)) {
  customElements.define(CucumberPopoverWrapper.tagName, CucumberPopoverWrapper);
}

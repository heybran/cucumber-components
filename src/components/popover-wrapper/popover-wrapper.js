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
  static tagName = 'cc-popover-wrapper';

  connectedCallback() {
    this.render('<slot name="trigger"></slot><slot></slot>', css);
    this.trigger = this.getAssignedElementsFor(this.getSlot('trigger'))[0];
    this.popoverElement = this.getAssignedElementsFor(this.defaultSlot)[0];
    this.trigger.addEventListener('click', this.handleTriggerClick.bind(this));
  }

  handleTriggerClick(event) {
    const position = this.popoverElement.getAttribute('placement');
    const { x, y, anchorElementWidth } = calculatePosition({
      popover: this.popoverElement, 
      anchorElement: this.trigger, 
      position: position ?? 'bottom',
      offset: 10
    });
    this.popoverElement.style.setProperty('--left', `${x}px`);
    this.popoverElement.style.setProperty('--top', `${y}px`);
    this.popoverElement.style.setProperty('--anchor-element-width', `${anchorElementWidth}px`);
    this.popoverElement.toggleAttribute('open');
  }
}

if (!customElements.get(CucumberPopover.tagName)) {
	customElements.define(CucumberPopover.tagName, CucumberPopover);
}
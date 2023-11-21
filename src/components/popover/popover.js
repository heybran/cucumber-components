import css from "./popover.css?inline";
import sharedCss from "../../shared/shared.css";
import BaseElement from "../../shared/base-element.js";

/**
 * @element cc-popover
 * 
 * @slot - content to display within the popover.
 */
export default class CucumberPopover extends BaseElement {
  /** @type {string} */
  static tagName = 'cc-popover';

  connectedCallback() {
    this.render('<slot></slot><div id="tip" aria-hidden="true"></div>', css, sharedCss);
    document.addEventListener('click', this.closeWhenClickOutside.bind(this));
  }

  closeWhenClickOutside(event) {
    if (!this.hasAttribute('open')) {
			return;
		}

    if (!this.classList.contains('opened')) {
      return;
    }

		if (!event.composedPath().includes(this)) {
			this.removeAttribute('open');
		}
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (this.hasAttribute(attr)) {
      this.addEventListener('animationend', () => this.classList.add('opened'), { once: true });
    } else {
      this.classList.remove('opened');
    }
  }
}

if (!customElements.get(CucumberPopover.tagName)) {
	customElements.define(CucumberPopover.tagName, CucumberPopover);
}
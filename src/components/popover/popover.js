import css from "./popover.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import BaseElement from "../../shared/base-element.js?raw";

/**
 * @element cc-popover
 *
 * @slot - content to display within the popover.
 *
 * @fires popoverOpened - event fired when popover is opened.
 */
export default class CucumberPopover extends BaseElement {
  /** @type {string} */
  static tagName = 'cc-popover';

  connectedCallback() {
    this.render('<slot></slot><div id="tip" aria-hidden="true"></div>', css, sharedCss);
    document.addEventListener('click', this.closeWhenClickOutside.bind(this));
    if (!this.hasAttribute('placement')) {
      this.setAttribute('placement', 'bottom-center');
    }
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
      this.addEventListener('animationend', () => {
        this.classList.add('opened');
        this.dispatchEvent(new Event('popoverOpened', {
          bubbles: true,
          composed: true
        }));
      }, { once: true });
    } else {
      this.classList.remove('opened');
      this.classList.remove('reverse');
      this.dispatchEvent(new Event('popoverClosed', {
        bubbles: true,
        composed: true
      }));
    }
  }
}

if (!customElements.get(CucumberPopover.tagName)) {
	customElements.define(CucumberPopover.tagName, CucumberPopover);
}

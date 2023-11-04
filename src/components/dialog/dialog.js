import css from "./dialog.css?inline";
import sharedCSS from "../../shared/shared.css?inline";
import html from "./dialog.html?raw";
import BaseElement from "../../shared/base-element.js";
import "../button/button.js";
import "../icon/icon.js";
import "../tooltip/tooltip.js";

export default class CucumberDialog extends BaseElement {
  /** @type {string} */
  static __localName = 'cc-dialog';

  constructor() {
    super().render(html, css, sharedCSS);
  }

  /**
   * @returns {HTMLDialogElement}
   */
  get dialog() {
    // @ts-ignore
    return this.shadowRoot.querySelector('dialog');
  }

  #showModal() {
    this.dialog.showModal();
    this.#afterShow();
  }

  /**
   * Make another API that also opens dialog.
   * @returns void
   */
  show() {
    return this.#showModal();
  }

  /**
   * Actions to perform after dialog is shown to users.
   * @returns void
   */
  #afterShow() {
    const custom_initial_focus_element = this.querySelector('[initial-focus]');
    if (!custom_initial_focus_element) return;
    // @ts-ignore
    custom_initial_focus_element?.focus();
  }

  close() {
    return this.dialog.close();
  }

  hide() {
    return this.dialog.close();
  }

  connectedCallback() {
  }

  static get observedAttributes() {
		return ['label'];
	}

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'label') {
      this.shadowRoot.querySelector('slot[name="title"]').textContent = this.getAttribute('label');
    }
	}
}

if (!customElements.get(CucumberDialog.__localName)) {
	customElements.define(CucumberDialog.__localName, CucumberDialog);
}
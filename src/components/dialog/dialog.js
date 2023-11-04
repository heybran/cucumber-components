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

  /**
   * Functions to run after dialog is closed.
   * @type {Array<Function>} - callback functions
   */
  #after_hide_callbacks = [];

  constructor() {
    super();
    this.render(html, css, sharedCSS);
  }

  /**
   * @returns {HTMLDialogElement}
   */
  get dialog() {
    // @ts-ignore
    return this.shadowRoot.querySelector('dialog');
  }

  /**
   * Make another API that also opens dialog.
   * @returns void
   */
  show() {
    this.setupA11yDesc();
    this.dialog.showModal();
    this.setupInitialFocus();
  }

  close() {
    if (this.#after_hide_callbacks.length > 0) {
      this.#after_hide_callbacks.forEach((fn) => {
        fn();
        this.#after_hide_callbacks = this.#after_hide_callbacks.filter(callback => callback !== fn);
      });
    }
    this.dialog.close();
  }

  hide() {
    return this.dialog.close();
  }

  /**
   * Clean up action after dialog is closed
   * @param {Function} callback 
   */
  afterHide(callback) {
    this.#after_hide_callbacks.push(callback);
  }

  /**
   * Actions to perform after dialog is shown to users.
   * @returns void
   */
  setupInitialFocus() {
    const custom_initial_focus_element = this.querySelector('[initial-focus]');
    if (!custom_initial_focus_element) return;
    // @ts-ignore
    custom_initial_focus_element?.focus();
  }

  /**
   * Prepare a11y dialog description for screen readers.
   * @returns void
   */
  setupA11yDesc() {
    const a11y_desc_element = this.querySelector('[a11y-desc]');
    if (!a11y_desc_element) return;

    const _clone = a11y_desc_element.cloneNode(true);
    _clone.id = 'dialog-desc';
    _clone.setAttribute('hidden', '');
    this.dialog.setAttribute('aria-describedby', 'dialog-desc');
    this.shadowRoot?.appendChild(_clone);

    this.afterHide(() => {
      _clone.remove();
      this.dialog.removeAttribute('aria-describedby');
    });
  }

  connectedCallback() {}

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
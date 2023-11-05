import css from "./side-nav.css?inline";
import sharedCSS from "../../shared/shared.css?inline";
import html from "./side-nav.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberSideNav extends BaseElement {
  /** @type {string} */
  static __localName = 'cc-side-nav';

  constructor() {
    super();
    this.render(html, css, sharedCSS);
  }

  connectedCallback() {
    this.setAttribute('role', 'navigation');
    /** @type {HTMLSlotElement} */
    const labelSlot = this.shadowRoot?.querySelector('slot[name="label"]');
    if (labelSlot.assignedElements().length > 0) {
      const id = `side-nav-label-${this.uuid()}`;
      this.setAttribute('aria-labelledby', id);
      this.querySelector('[slot="label"]').id = id;
    }
  }

  static get observedAttributes() {
		return [''];
	}


  attributeChangedCallback(attr, oldValue, newValue) {
	}
}

if (!customElements.get(CucumberSideNav.__localName)) {
	customElements.define(CucumberSideNav.__localName, CucumberSideNav);
}
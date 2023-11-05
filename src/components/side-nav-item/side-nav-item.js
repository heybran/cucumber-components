import css from "./side-nav-item.css?inline";
import sharedCSS from "../../shared/shared.css?inline";
import html from "./side-nav-item.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberSideNavItem extends BaseElement {
  /** @type {string} */
  static __localName = 'cc-side-nav-item';

  constructor() {
    super();
    this.render(html, css, sharedCSS);
  }

  connectedCallback() {
    this.setAttribute('role', 'listitem');
    this.toggleActiveState();
    /**
     * For url changes inside single page application.
     * @todo need to test this once an SPA demo site is setup.
     */
    window.addEventListener('popstate', this.toggleActiveState.bind(this));
  }

  toggleActiveState() {
    const path = window.location.pathname;
    if (this.getAttribute('path') === path) {
      this.link.setAttribute('aria-current', 'true');
    } else {
      this.link.setAttribute('aria-current', 'false');
    }
  }

  static get observedAttributes() {
		return ['path'];
	}

  /**
   * @returns {HTMLAnchorElement}
   */
  get link() {
    // @ts-ignore
    return this.shadowRoot.querySelector('a');
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'path') {
      this.link.setAttribute('href', newValue);
    }
	}
}

if (!customElements.get(CucumberSideNavItem.__localName)) {
	customElements.define(CucumberSideNavItem.__localName, CucumberSideNavItem);
}
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
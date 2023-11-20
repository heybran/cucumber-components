import css from "./badge.css?inline";
import sharedCSS from "../../shared/shared.css?inline";
import html from "./badge.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberBadge extends BaseElement {
  /** @type {string} */
  static tagName = 'cc-badge';

  connectedCallback() {
    this.render(html, css, sharedCSS);
  }
}

if (!customElements.get(CucumberBadge.tagName)) {
	customElements.define(CucumberBadge.tagName, CucumberBadge);
}
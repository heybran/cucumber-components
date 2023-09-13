import css from "./divider.css?inline";
import sharedCSS from "../../shared/shared.css?inline";
import html from "./divider.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberDivider extends BaseElement {
  connectedCallback() {
    super.render(html, css, sharedCSS);
    this.setAttribute('role', 'separator');
    if (this.getAttribute('theme')?.includes('vertical')) {
      this.setAttribute('aria-orientation', 'vertical');
    } else {
      this.setAttribute('aria-orientation', 'horizontal');
    }
    if (this.hasAttribute('text')) {
      this.shadowRoot.querySelector('.text').textContent = this.getAttribute('text');
    }
  }
}

customElements.define('cc-divider', CucumberDivider);
import FormElement from "../../shared/form-element.js";
import css from "./space.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./space.html?raw";

export default class CucumberSpace extends FormElement {
  constructor() {
    super();
    this.render(html, css, sharedCss);
  }

  get size() {
    return this.getAttribute("size");
  }

  connectedCallback() {
    this._connected = true;
    this.setctionRef = this.shadowRoot.querySelector(".cc-space");
    this.setctionRef.style.columnGap = this.size + 'px';
  }
}

if (!customElements.get("cc-space")) {
  customElements.define("cc-space", CucumberSpace);
}

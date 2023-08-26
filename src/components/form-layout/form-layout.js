// @ts-check
import css from "./form-layout.css?inline";
import html from "./form-layout.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberFormLayout extends BaseElement {
  connectedCallback() {
    super.render(html, css);
  }
}

customElements.define('cc-form-layout', CucumberFormLayout);
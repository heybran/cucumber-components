// @ts-check
import css from "./horizontal-layout.css?inline";
import html from "./horizontal-layout.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberHorizontalLayout extends BaseElement {
  connectedCallback() {
    super.render(html, css);
  }
}

customElements.define('cc-horizontal-layout', CucumberHorizontalLayout);
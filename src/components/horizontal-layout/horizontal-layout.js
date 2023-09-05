// @ts-check
import css from "./horizontal-layout.css?inline";
import BaseElement from "../../shared/base-element.js";

export default class CucumberHorizontalLayout extends BaseElement {
  connectedCallback() {
    super.render('<slot></slot>', css);
  }
}

customElements.define('cc-horizontal-layout', CucumberHorizontalLayout);
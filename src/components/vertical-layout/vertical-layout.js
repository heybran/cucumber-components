// @ts-check
import css from "./vertical-layout.css?inline";
import BaseElement from "../../shared/base-element.js";

export default class CucumberVerticalLayout extends BaseElement {
  connectedCallback() {
    super.render('<slot></slot>', css);
  }
}

customElements.define('cc-vertical-layout', CucumberVerticalLayout);
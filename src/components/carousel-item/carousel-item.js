// @ts-check
import css from "./carousel-item.css?inline";
import BaseElement from "../../shared/base-element.js";

export default class CucumberCarouselItem extends BaseElement {
  connectedCallback() {
    super.render('<slot></slot>', css);
    this.setAttribute('role', 'group');
    this.setAttribute('aria-hidden', 'true');
    this.setAttribute('aria-label', '');
  }
}

customElements.define('cc-carousel-item', CucumberCarouselItem);

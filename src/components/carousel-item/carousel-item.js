// @ts-check
import css from "./carousel-item.css?inline";
import BaseElement from "../../shared/base-element.js";

export default class CucumberCarouselItem extends BaseElement {
  connectedCallback() {
    super.render('<slot></slot>', css);
    this.setAttribute('role', 'group');
    this.setAttribute('aria-hidden', 'true');
    const index = Array.from(this.parentElement.querySelectorAll(this.localName))
      .findIndex(item => item === this);
    this.setAttribute('aria-label', `Slide ${index + 1}`);
    this.setAttribute('data-index', `${index + 1}`);
  }
}

customElements.define('cc-carousel-item', CucumberCarouselItem);

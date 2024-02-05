import FormElement from "../../shared/form-element.js";
import css from "./space.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./space.html?raw";

export default class CucumberSpace extends FormElement {
  constructor() {
    super();
    this.render(html, css, sharedCss);
  }

  /**
   * @description size of the space.
   * `small` is 8px, 'middle' is 16px, 'large' is 24px
   * `number` is custom size
   * @returns {number} size in pixel
   */
  get sizeInPx() {
    const attrSize = this.getAttribute("size") || 16;
    if (attrSize === 'small') return 8;
    if (attrSize === 'large') return 24;
    if (attrSize === 'middle') return 16;
    const parsedNum= parseInt(attrSize, 10);
    return Number.isNaN(parsedNum) ? 16 : parsedNum;
  }

  /**
   * horizontal by default if no direction is set
   * @returns {'horizontal'|'vertical'}
   */
  get getDirection() {
    return this.getAttribute("direction") || "horizontal";
  }

  // watch the direction, align, and size attributes
  static get observedAttributes() {
    return ['direction', 'size']
  }

  /**
   * @description watch for the direction and size attribute changes
   * @param attr {string} attribute name
   */
  attributeChangedCallback(attr) {
    const sectionRef = this.shadowRoot.querySelector('.cc-space-section');
    if (sectionRef === null) return;
    if (attr === 'direction' || attr === 'size') {
      sectionRef.style.gap = this.getDirection === 'vertical' ? `${this.sizeInPx}px 0` : `0 ${this.sizeInPx}px`;
    }
  }

  connectedCallback() {
    const gapProp = this.getDirection === "vertical" ? 'row-gap' : 'column-gap'
    // render the component
    super.render(`
    <section class="cc-space-section" style="${gapProp}: ${this.sizeInPx}px">
        <slot></slot>
    </section>
    `, css, sharedCss);
  }
}

if (!customElements.get("cc-space")) {
  customElements.define("cc-space", CucumberSpace);
}

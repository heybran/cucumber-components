import css from "./qr-code.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import BaseElement from "../../shared/base-element.js";
import QrCreator from "qr-creator";
import styleMap from "../../util/styleMap.js";


const WATCHED_ATTRIBUTES = ["size", "value", "label", "ecLevel", "color", 'radius'];
export default class CucumberQrCode extends BaseElement {
  /** @type {string} */
  static tagName = "cc-qr-code";

  get size() {
    return this.getAttribute("size") || 128;
  }

  set size(value) {
    this.setAttribute("size", value);
  }

  get value() {
    return this.getAttribute("value") || "";
  }

  set value(value) {
    this.setAttribute("value", value);
  }

  get label() {
    return this.getAttribute("label") || "";
  }

  set label(value) {
    this.setAttribute("label", value);
  }

  get ecLevel() {
    return this.getAttribute("error-correction") || "L";
  }

  set ecLevel(value) {
    this.setAttribute("error-correction", value);
  }

  get color() {
    return this.getAttribute("color") || "black";
  }
  set color(value) {
    this.setAttribute("color", value);
  }

  get radius() {
    return this.getAttribute("radius") || "0";
  }
  set radius(value) {
    this.setAttribute("radius", value);
  }

  static get observedAttributes() {
    return WATCHED_ATTRIBUTES;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (WATCHED_ATTRIBUTES.includes(name) && oldValue !== newValue) {
      this.watch({
        value: name === 'value' ? newValue : this.value,
        color: name === 'color' ? newValue : this.color,
        size: name === 'size' ? newValue : this.size,
        radius: name === 'radius' ? newValue : this.radius,
        ecLevel: name === 'ecLevel' ? newValue : this.ecLevel,
      });
    }
  }

  connectedCallback() {
    this.render(`<canvas part="base" aria-label="${this.label.length > 0 ? this.label : this.value}" role="img" id="qr-code" style="${styleMap({
      width: this.size + 'px',
      height: this.size + 'px',
    })}"></canvas>`, css, sharedCss);
    this.watch({
      value: this.value,
      color: this.color,
      size: this.size,
      radius: this.radius,
      ecLevel: this.ecLevel,
    })
  }

  /**
   * @param {object} options options for rendering the QR code
   * @param options.size  The size of the QR code
   * @param options.ecLevel The error correction level
   * @param options.value The value to encode in the QR code
   * @param options.color The color of the QR code
   * @param options.radius The radius of the QR code
   */
  watch({
    value,
    color,
    size,
    radius,
    ecLevel,
        }) {
    const canvas = this.shadowRoot.getElementById("qr-code");
    // if the canvas is available, render the QR code
    if (canvas) {
      // compute the size of the canvas
      canvas.style.width = size + "px";
      canvas.style.height = size + "px";
      QrCreator.render({
        text: value,
        fill: color,
        size: size * 2,
        radius,
        ecLevel,
      }, canvas);
    } else {
      // if the canvas is not yet available, try again after 100ms
      setTimeout(() => {
        this.watch({
          value,
          color,
          size,
          radius,
          ecLevel,
        })
      }, 100);
    }

  }
}

const tagName = CucumberQrCode.tagName;
if (!customElements.get(tagName)) {
  customElements.define(tagName, CucumberQrCode);
}

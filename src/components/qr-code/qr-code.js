import css from "./qr-code.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import BaseElement from "../../shared/base-element.js";


/**
 * @module QrCode
 */
export default class CucumberQrCode extends BaseElement {
  /** @type {string} */
  static tagName = "cc-qr-code";
  connectedCallback() {
    this.render('<canvas id="qr-code"></canvas>', css, sharedCss);
  }
}

const tagName = CucumberQrCode.tagName;
if (!customElements.get(tagName)) {
  customElements.define(tagName, CucumberQrCode);
}

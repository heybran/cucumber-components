// @ts-check
import css from "./alert.css?inline";
import html from "./alert.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class BreezeAlert extends BaseElement {
  constructor() {
    super();
    this.alertsShown = [];
  }

  connectedCallback() {
    super.render(html, css);
  }

  show() {
    this.setAttribute('open', '');
    this.container.removeAttribute('hidden');
    this.container.setAttribute('aria-hidden', 'false');
    this.alertsShown.push(this);
    const timeout = setTimeout(() => {
      this.hide();
      this.alertsShown.pop();
      clearTimeout(timeout);
    }, 5000);
  }

  hide() {
    this.removeAttribute('open');
    this.container.setAttribute('hidden', '');
    this.container.setAttribute('aria-hidden', 'true');
  }
}

customElements.define('breeze-alert', BreezeAlert);

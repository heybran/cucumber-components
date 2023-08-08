// @ts-check
import { customElement, property } from "../../util/decorators";
import css from "./breeze-icon.css?inline";
import icons from "./breeze-icon-svg.js";

@customElement('breeze-icon')
export default class BreezeIcon extends HTMLElement {
  static get is() {
    return `breeze-icon`;
  }
  /** @type {string} */
  @property({ type: String }) icon;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.root = this.shadowRoot;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // @ts-ignore
    this.root.innerHTML = `
      <style>${css}</style>
      <svg viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" fill="currentColor">
        ${icons[this.icon]}
      </svg>
    `;
  }
}
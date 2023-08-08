// @ts-check
import { customElement, property } from "../../util/decorators";
import shared from "../shared/shared.css";
import css from "./breeze-option.css?inline";

@customElement('breeze-option')
export default class BreezeOption extends HTMLElement {
  static get is() {
    return `breeze-option`;
  }
  /** @type {string} */
  @property({ type: String }) text;

  /** @type {string} */
  @property({ type: String }) value;

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
      <style>${shared}${css}</style>
      <li>
        <button type="button" title="${this.text}">
          ${this.text}
        </button>
      </li>
    `;
  }
}
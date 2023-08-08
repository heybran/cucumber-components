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
  // @property({ type: String }) text;

  /** @type {string} */
  // @property({ type: String }) value;

  /** @returns {string} */
  get value() {
    return this.getAttribute('value') ?? '';
  }

  /** @returns {string} */
  get text() {
    return this.getAttribute('text') ?? '';
  }

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
        <button type="button" title="${this.text}" onclick="this.getRootNode().host.handleClick()">
          ${this.text}
        </button>
      </li>
    `;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('breeze-option-selected', {
      bubbles: true, 
      composed: true, 
      cancelable: true,
      detail: {
        value: this.value,
      }
    }));
  }
}
// @ts-check
import { customElement, property } from "../../util/decorators";
import css from "./breeze-text-field.css?inline";

@customElement('breeze-text-field')
export default class BreezeTextField extends HTMLElement {
  /** @type {string} */
  @property({ type: String }) label;

  /** @type {string} */
  @property({ type: String }) placeholder;

  /** @type {string} */
  @property({ type: String }) helperText; // helper-text

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
      <style>${css}</style>
      <div part="container">
        <label part="label">
          <span>${this.label}</span>
        </label>
        <div part="input-container">
          <input 
            part="input"
            type="text" 
            autocomplete="off" 
            autocapitalize="off" 
            autocorrect="off"
            spellcheck="false"
            aria-invalid="false"
            aria-describedby=""
            placeholder="${this.placeholder}"
            value="${this.value}"
            onkeyup="this.setAttribute('value', this.value)"
          >
        </div>
        <div part="helper-text">${this.helperText}</div>
        <div part="error-message"></div>
      </div>
    `;
  }
}
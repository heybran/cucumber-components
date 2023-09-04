// @ts-check
import shared from "../../shared/shared.css?inline";
import css from "./option.css?inline";

export default class CucumberOption extends HTMLElement {
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
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <li>
        <button type="button" title="${this.text}" onclick="this.getRootNode().host.handleClick()">
          ${this.text}
        </button>
      </li>
    `;
  }

  focus() {
    this.shadowRoot.querySelector('button').focus();
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('cc-option-selected', {
      bubbles: true, 
      composed: true, 
      cancelable: true,
      detail: {
        value: this.value,
      }
    }));
  }
}

if (!customElements.get('cc-option')) {
  customElements.define('cc-option', CucumberOption);
}
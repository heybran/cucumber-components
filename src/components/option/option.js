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
    this.setAttribute('role', 'option');
    if (!this.hasAttribute('aria-selected')) {
      this.setAttribute('aria-selected', 'false');
    }
  }

  render() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div onclick="this.getRootNode().host.handleClick();" title="${this.text}" part="container">
        <span><slot name="prefix"></slot></span>
        <span>${this.text}</span>
        <span><slot name="suffix"></slot></span>
      </div>
    `;
  }

  focus() {
    // this.shadowRoot.querySelector('button').focus();
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
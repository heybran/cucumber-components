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
    return this.textContent;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.setAttribute('role', 'option');
    this.render();
    if (!this.hasAttribute('aria-selected')) {
      this.setAttribute('aria-selected', 'false');
    }
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick.bind(this));
  }

  render() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div part="container">
        <span><slot name="prefix"></slot></span>
        <span><slot></slot></span>
        <span><slot name="suffix"></slot></span>
      </div>
    `;
  }

  handleClick(event) {
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
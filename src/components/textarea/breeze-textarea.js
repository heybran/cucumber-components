// @ts-check
import shared from "../shared/shared.css?inline";
import css from "./breeze-textarea.css?inline";

export default class BreezeTextarea extends HTMLElement {
  /** @returns {string} */
  get helperText() {
    return this.getAttribute('helper-text') ?? '';
  }

  /** @returns {string} */
  get placeholder() {
    return this.getAttribute('placeholder') ?? '';
  }

  /** @returns {string} */
  get label() {
    return this.getAttribute('label') ?? '';
  }

  /** @returns {boolean} */
  get disabled() {
    return this.hasAttribute('disabled');
  }

  /**
   * @param {boolean|number} flag
   */
  set disabled(flag) {
    this.toggleAttribute('disabled', Boolean(flag));
    // @ts-ignore
    this.shadowRoot.querySelector('input').toggleAttribute('disabled', Boolean(flag));
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['checked', 'disabled'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue === null) {
      return;
    }
    if (attr === 'checked') {
      this.checked = this.hasAttribute('checked');
    } else if (attr === 'disabled') {
      this.disabled = this.hasAttribute('disabled');
    }
  }

  render() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div class="container">
        <label for="" aria-hidden="false">
          <slot name="label">${this.label}</slot>
        </label>
        <textarea 
          part="textarea" 
          name="" id="" cols="30" rows="10"
          spellcheck="true"
          aria-describedby=""
          placeholder="${this.placeholder}"
          rows="${this.rows ? this.rows : 4}"
          name="${this.name ?? ''}"
          ${this.hasAttribute('disabled') ? 'disabled' : ''}
        ></textarea>
        <div 
          part="helper-text" 
          id="TODO"
          aria-hidden="${
            (this.helperText || this.querySelector('[slot="helper-text"]'))
              ? 'false'
              : 'true'
          }"
        >
          <slot name="helper-text">${this.helperText}</slot>
        </div>
      </div>
    `;
  }
}

customElements.define('breeze-textarea', BreezeTextarea);
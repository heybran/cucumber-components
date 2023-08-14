// @ts-check
import shared from "../shared/shared.css";
import css from "./breeze-switch.css?inline";
import "../icon/breeze-icon.js";

export default class BreezeSwitch extends HTMLElement {
  /** @returns {boolean} */
  get checked() {
    return this.hasAttribute('checked');
  }

  /**
   * @param {boolean|number} flag
   */
  set checked(flag) {
    this.toggleAttribute('checked', Boolean(flag));
    // @ts-ignore
    this.shadowRoot.querySelector('input').checked = Boolean(flag);
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
      <label part="base">
        <input 
          class="sr-only"
          type="checkbox" 
          role="switch" 
          aria-checked="${this.checked ? 'true' : 'false'}" 
          ${this.checked ? 'checked' : ''}
          ${this.disabled ? 'disabled' : ''}
          aria-busy="false"
          onchange="this.getRootNode().host.onInputChange(event)"
        >
        <span part="control">
          <span part="thumb" aria-hidden="true">
            <breeze-icon icon="cross"></breeze-icon>
          </span>
          <span part="thumb" aria-hidden="true">
            <breeze-icon icon="check"></breeze-icon>
          </span>
        </span>
        <slot part="label"></slot>
      </label>
    `;
  }

  onInputChange(event) {
    this.checked = event.target.checked;
  }
}

customElements.define('breeze-switch', BreezeSwitch);
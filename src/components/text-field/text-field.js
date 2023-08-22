// @ts-check
import html from "./text-field.html?raw";
import css from "./text-field.css?inline";
import FormElement from "../../shared/form-element.js";

export default class BreezeTextField extends FormElement {
  get input() {
    // @ts-ignore
    return this.shadowRoot.querySelector('input');
  }
  
  /**
   * @param {string} arg
   */
  set label(arg) {
    // @ts-ignore
    this.shadowRoot.querySelector('[part="label"] span').textContent = arg;
  }

  /**
   * @param {string} arg
   */
  set placeholder(arg) {
    // @ts-ignore
    this.input.placeholder = arg;
  }

  /**
   * @param {string} arg
   */
  set helperText(arg) {
    // @ts-ignore
    this.shadowRoot.querySelector('[part="helper-text"]').textContent = arg;
  }

  /**
   * @returns {string}
   */
  get value() {
    // @ts-ignore
    return this.input.value;
  }

  /**
   * @param {string} arg
   */
  set value(arg) {
    // @ts-ignore
    this.input.value = arg;
  }

  connectedCallback() {
    super.render(html, css);
    if (this.value) {
      this.value = this.getAttribute('value') ?? '';
    }

    /**
     * Store an initial value to be used on form resetting
     */
    this._initialValue = this.value;

    if (this.hasAttribute('label')) {
      this.label = this.getAttribute('label') ?? '';
    }

    if (this.hasAttribute('placeholder')) {
      this.placeholder = this.getAttribute('placeholder') ?? '';
    }

    if (this.hasAttribute('helper-text')) {
      this.helperText = this.getAttribute('helper-text') ?? '';
    }

    this.getForm()?.addEventListener('formdata', (event) => {
      const formData = event.formData;
      if (!this.hasAttribute('name')) {
        return console.warn(`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`);
      }
      // @ts-ignore
      formData.set(this.getAttribute('name'), this.value);
    });

    this.getForm()?.addEventListener('reset', (event) => {
      // @ts-ignore
      this.value = this._initialValue;
    });
  }

  /**
   * @returns {string[]}
   */
  static get observedAttributes() {
    return [...super.observedAttributes];
  }

  /**
   * @param {string} attr 
   * @param {string} oldValue 
   * @param {string} newValue 
   */
  attributeChangedCallback(attr, oldValue, newValue) {
    super.attributeChangedCallback(attr, oldValue, newValue);
  }
}

if (!customElements.get('breeze-text-field')) {
  customElements.define('breeze-text-field', BreezeTextField);
}
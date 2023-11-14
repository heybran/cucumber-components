import html from "./textarea.html?raw";
import css from "./textarea.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import FormElement from "../../shared/form-element.js";
import { TEXTAREA } from "../../shared/form-field-properties";

export default class CucumberTextarea extends FormElement {
  constructor() {
		super();
		this.render(html, css, sharedCss);
	}
  
  /** @type {string} */
	static __localName = 'cc-textarea';

	/**
	 * Since we can't just put text content directly inside cc-textarea
	 * @param {string} arg
	 */
	set value(arg) {
		this.reflectTarget.value = arg;
	}

	get value() {
		return this.reflectTarget.value;
	}

	/**
	 * Update label text.
	 * @param {string} text
	 */
	onLabelChange(text) {
		this.shadowRoot.querySelector('slot[name="label"]').textContent = text;
	}

	/**
	 * Update helper text.
	 * @param {string} text 
	 */
	onHelperTextChange(text) {
		this.shadowRoot.querySelector('slot[name="helper-text"]').textContent = text;
	}

  connectedCallback() {
    const form = this.getForm();
		if (form) {
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
			}
			form.__cucumberElements.push(this);
		}

		/**
		 * Store an initial value to be used on form resetting
		 */
		// this._initialValue = this.value;

		this.getForm()?.addEventListener("formdata", this.setFormData);

		// this.getForm()?.addEventListener("reset", (event) => {
		// 	// @ts-ignore
		// 	// @todo 
		// 	this.value = this._initialValue;
		// });
  }

  isValid() {
		return this.reflectTarget.checkValidity();
	}

	reportValidity() {
		this.reflectTarget.reportValidity();
	}

	static get observedAttributes() {
		return [...Object.keys(TEXTAREA)];
	}

	/**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
	attributeChangedCallback(attr, oldValue, newValue) {
		super.attributeChangedCallback(attr, oldValue, newValue, TEXTAREA);
	}
}

if (!customElements.get(CucumberTextarea.__localName)) {
	customElements.define(CucumberTextarea.__localName, CucumberTextarea);
}
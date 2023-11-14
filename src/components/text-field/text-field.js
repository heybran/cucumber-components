import FormElement from "../../shared/form-element.js";
import css from "./text-field.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./text-field.html?raw";
import { TEXT_FIELD } from "../../shared/form-field-properties.js";

export default class CucumberTextField extends FormElement {
	constructor() {
		super();
		this.render(html, css, sharedCss);
	}

	/** @type {string} */
	static __localName = 'cc-text-field';

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
		this.connectSelfToForm();

		/**
		 * Store an initial value to be used on form resetting
		 */
		this._initialValue = this.value;

		this.getForm()?.addEventListener("reset", (event) => {
			// @ts-ignore
			this.value = this._initialValue;
		});

		// @ts-ignore
		this.input.addEventListener("input", (event) => {
			this.dispatchEvent(new Event("input"));
		});

		// @ts-ignore
		this.input.addEventListener("change", (event) => {
			this.dispatchEvent(new Event("change"));
		});
	}

	disconnectedCallback() {
		/**
		 * console.log(this.getForm()); // renders null when disconnected from DOM,
		 * so the following remove event listener is not working as expected.
		 */
		this.getForm()?.removeEventListener("formdata", this.setFormData);
	}

	static get observedAttributes() {
		return [...Object.keys(TEXT_FIELD)];
	}

	/**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
	attributeChangedCallback(attr, oldValue, newValue) {
		super.attributeChangedCallback(attr, oldValue, newValue, TEXT_FIELD);
	}
}

if (!customElements.get(CucumberTextField.__localName)) {
	customElements.define(CucumberTextField.__localName, CucumberTextField);
}

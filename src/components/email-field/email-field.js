import FormElement from "../../shared/form-element.js";
import css from "./email-field.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./email-field.html?raw";
import { EMAIL_FIELD } from "../../shared/form-field-properties.js";

export default class CucumberEmailField extends FormElement {
	constructor() {
		super().render(html, css, sharedCss);
	}

	/** @type {string} */
	static __localName = 'cc-email-field';

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
		/**
		 * In your case, since the task of setting attributes and updating the form elements 
		 * does not require immediate attention and is not related to visual updates or animations, 
		 * using `requestIdleCallback()` would be more appropriate. 
		 * It ensures that the task is performed during idle periods, 
		 * reducing the impact on critical rendering and user interactions.
		 */
		requestIdleCallback(() => {
			const id = `input-${this.uuid()}`;
			// @ts-ignore
			this.shadowRoot.querySelector('[part="label"]').setAttribute("for", id);
			this.input.id = id;
			const form = this.getForm();
			if (!form) return;
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
			}
			form.__cucumberElements.push(this);
		});

		/**
		 * Store an initial value to be used on form resetting
		 */
		this._initialValue = this.value;

		this.getForm()?.addEventListener("formdata", this.setFormData);

		this.getForm()?.addEventListener("reset", (event) => {
			// @ts-ignore
			// @todo 
			this.value = this._initialValue;
		});

		// @ts-ignore
		this.input.addEventListener("input", (event) => {
			this.dispatchEvent(new Event("input"));
		});

		// @ts-ignore
		this.input.addEventListener("change", (event) => {
			/**
			 * Reset validity to empty string otherwise this field
			 * will stay invalid forever.
			 */
			this.input.setCustomValidity('');
			this.dispatchEvent(new Event("change"));
		});
	}

	isValid() {
		return this.input.checkValidity();
	}

	reportValidity() {
		this.input.reportValidity();
	}

	disconnectedCallback() {
		/**
		 * console.log(this.getForm()); // renders null when disconnected from DOM,
		 * so the following remove event listener is not working as expected.
		 */
		this.getForm()?.removeEventListener("formdata", this.setFormData);
	}

	static get observedAttributes() {
		return [...Object.keys(EMAIL_FIELD)];
	}

	/**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
	attributeChangedCallback(attr, oldValue, newValue) {
		super.attributeChangedCallback(attr, oldValue, newValue, EMAIL_FIELD);
	}
}

if (!customElements.get(CucumberEmailField.__localName)) {
	customElements.define(CucumberEmailField.__localName, CucumberEmailField);
}

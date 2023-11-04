import FormElement from "../../shared/form-element.js";
import css from "./file-upload.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./file-upload.html?raw";
import { FILE_UPLOAD } from "../../shared/form-field-properties.js";
import "../icon/icon.js";

export default class CucumberFileUpload extends FormElement {
	constructor() {
		super();
		this.render(html, css, sharedCss);
	}

	/** @type {string} */
	static __localName = 'cc-file-upload';

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

	/**
	 * @returns {File[]|[]}
	 */
	get files() {
		return this.reflectTarget.files;
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
		return [...Object.keys(FILE_UPLOAD)];
	}

	/**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
	attributeChangedCallback(attr, oldValue, newValue) {
		super.attributeChangedCallback(attr, oldValue, newValue, FILE_UPLOAD);
	}
}

if (!customElements.get(CucumberFileUpload.__localName)) {
	customElements.define(CucumberFileUpload.__localName, CucumberFileUpload);
}

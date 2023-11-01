import FormElement from "../../shared/form-element.js";
import css from "./date-picker.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./date-picker.html?raw";
import { DATE_PICKER } from "../../shared/form-field-properties.js";

export default class CucumberDatePicker extends FormElement {
	constructor() {
		super();
		this.render(html, css, sharedCss);
	}

	/** @type {string} */
	static __localName = 'cc-date-picker';

	/**
	 * @returns {number|NaN}
	 */
	get valueAsNumber() {
		this.reflectTarget.valueAsNumber;
	}

	/**
	 * @returns {null|string}
	 */
	get valueAsDate() {
		return this.reflectTarget.valueAsDate;
	}

	/**
	 * Pass down showPicker()
	 */
	showPicker() {
		return this.reflectTarget.showPicker();
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

		/** @type {HTMLSlotElement} */
		this.prefixSlot = this.shadowRoot?.querySelector('slot[name="prefix"]');
		if (this.prefixSlot.assignedElements().length) {
			this.setAttribute('has-prefix-slot', '');
			this.prefixSlot.addEventListener('click', () => {
				this.input.focus();
			});
		}

		/**
		 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#list
		 * If we just simply add datalist with slot="datalist", 
		 * it's not working as datalist is located outside of shadowroot,
		 * so we need to append that datalist into shadowroot for it to be working.
		 */
		if (this.querySelector('[slot="datalist"]')) {
			this.shadowRoot.append(this.querySelector('[slot="datalist"]'));
		}
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
		return [...Object.keys(DATE_PICKER)];
	}

	/**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
	attributeChangedCallback(attr, oldValue, newValue) {
		super.attributeChangedCallback(attr, oldValue, newValue, DATE_PICKER);
	}
}

if (!customElements.get(CucumberDatePicker.__localName)) {
	customElements.define(CucumberDatePicker.__localName, CucumberDatePicker);
}

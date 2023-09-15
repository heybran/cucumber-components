import FormElement from "../../shared/form-element.js";
import css from "./email-field.css?inline";
import html from "./email-field.html?raw";
import formFieldProperties from "../../shared/form-field-properties.js";

console.log({ formFieldProperties})

export default class CucumberEmailField extends FormElement {
	/** @type {string} */
	static __localName = 'cc-email-field';

	/**
	 * @returns {HTMLInputElement}
	 */
	get input() {
		// @ts-ignore
		return this.shadowRoot.querySelector("input");
	}

	/**
	 * @param {string} arg
	 */
	// set label(arg) {
	// 	// @ts-ignore
	// 	this.shadowRoot.querySelector('[part="label"] span').textContent = arg;
	// }

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
		return this.input.value;
	}

	/**
	 * @param {string} arg
	 */
	set value(arg) {
		this.input.value = arg;
	}

	/**
	 * @param {boolean} flag
	 */
	set required(flag) {
		this.input.required = flag;
	}

	connectedCallback() {
		super.render(html, css);

		requestAnimationFrame(() => {
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

		// requestIdleCallback(() => {
		// 	const id = `input-${this.uuid()}`;
		// 	// @ts-ignore
		// 	this.shadowRoot.querySelector('[part="label"]').setAttribute("for", id);
		// 	this.input.id = id;
		// 	const form = this.getForm();
		// 	if (!form) return;
		// 	if (!Array.isArray(form.__cucumberElements)) {
		// 		form.__cucumberElements = [];
		// 	}
		// 	form.__cucumberElements.push(this);
		// });

		if (this.hasAttribute("value")) {
			this.value = this.getAttribute("value") ?? "";
		}

		/**
		 * Store an initial value to be used on form resetting
		 */
		this._initialValue = this.value;

		// if (this.hasAttribute("label")) {
		// 	this.label = this.getAttribute("label") ?? "";
		// }

		if (this.hasAttribute("placeholder")) {
			this.placeholder = this.getAttribute("placeholder") ?? "";
		}

		if (this.hasAttribute("helper-text")) {
			this.helperText = this.getAttribute("helper-text") ?? "";
		}

		this.required = this.hasAttribute("required");

		this.getForm()?.addEventListener("formdata", this.setFormData);

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

	isValid() {
		return this.input.checkValidity();
	}

	reportValidity() {
		this.input.reportValidity();
	}

	/**
	 * @param {FormDataEvent} event
	 * @returns void
	 */
	// setFormData = (event) => {
	// 	const formData = event.formData;
	// 	if (!this.hasAttribute("name")) {
	// 		return console.warn(
	// 			`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`,
	// 		);
	// 	}

	// 	/**
	// 	 * Fixes for not able to remove formdata event listener when disconnected
	// 	 */
	// 	if (!this.getForm()) {
	// 		return;
	// 	}
	// 	// @ts-ignore
	// 	formData.set(this.getAttribute("name"), this.value);
	// };

	disconnectedCallback() {
		/**
		 * console.log(this.getForm()); // renders null when disconnected from DOM,
		 * so the following remove event listener is not working as expected.
		 */
		this.getForm()?.removeEventListener("formdata", this.setFormData);
	}

	static get observedAttributes() {
		return [...Object.keys(formFieldProperties[this.__localName])];
	}

	/**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
	attributeChangedCallback(attr, oldValue, newValue) {
		const attrSource = formFieldProperties[this.localName][attr];
		if (!this.attributesDefined.includes(attr)) {
			Object.defineProperty(this, attr, {
				get() {
					if (attrSource.type === Boolean) {
						return this.hasAttribute(attr);
					} else if (attrSource.type === String) {
						console.log('getter called');
						return this.getAttribute(attr) ?? '';
					}
				},
				set(arg) {
					if (attrSource.type === Boolean) {
						this.toggleAttribute(attr, Boolean(arg));
					} else if (attrSource.type === String) {
						this.setAttribute(attr, arg);
					}
				}
			});

			this.attributesDefined.push(attr);
		}
	}
}

if (!customElements.get(CucumberEmailField.__localName)) {
	customElements.define(CucumberEmailField.__localName, CucumberEmailField);
}

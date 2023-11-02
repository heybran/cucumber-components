import FormElement from "../../shared/form-element.js";
import css from "./text-field.css?inline";
import html from "./text-field.html?raw";

export default class CucumberTextField extends FormElement {
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
		const form = this.getForm();
		if (form) {
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
			}
			form.__cucumberElements.push(this);
		}

		if (this.hasAttribute("value")) {
			this.value = this.getAttribute("value") ?? "";
		}

		/**
		 * Store an initial value to be used on form resetting
		 */
		this._initialValue = this.value;

		if (this.hasAttribute("label")) {
			this.label = this.getAttribute("label") ?? "";
		}

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

	disconnectedCallback() {
		/**
		 * console.log(this.getForm()); // renders null when disconnected from DOM,
		 * so the following remove event listener is not working as expected.
		 */
		this.getForm()?.removeEventListener("formdata", this.setFormData);
	}
}

if (!customElements.get("cc-text-field")) {
	customElements.define("cc-text-field", CucumberTextField);
}

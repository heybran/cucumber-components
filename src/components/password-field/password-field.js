import FormElement from "../../shared/form-element.js";
import BreezeIcon from "../icon/icon.js";
import css from "./password-field.css?inline";
import html from "./password-field.html?raw";

export default class CucumberPasswordField extends FormElement {
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
	 * @param {boolean} flag
	 */
	set readyonly(flag) {
		this.input.readOnly = flag;
	}

	/**
	 * @param {boolean} flag
	 */
	set disabled(flag) {
		this.input.disabled = flag;
		this.setAttribute("aria-disabled", "true");
		// @ts-ignore
		this.shadowRoot
			.querySelector('slot[name="suffix"]')
			.firstElementChild?.setAttribute("tabindex", "-1");
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

		this.defer(() => {
			const id = `input-${this.uuid()}`;
			// @ts-ignore
			this.shadowRoot.querySelector('[part="label"]').setAttribute("for", id);
			this.input.id = id;
		});

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

		if (this.hasAttribute("readonly")) {
			this.readyonly = true;
		}

		if (this.hasAttribute("disabled")) {
			this.disabled = true;
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

	/**
	 *
	 * @param {HTMLElement} triggerButton
	 */
	togglePasswordVisibility(triggerButton) {
		if (this.input.type === "password") {
			triggerButton.setAttribute("aria-label", "Hide password");
			triggerButton.setAttribute("aria-pressed", "true");
			/**
			 * Make icon attribute reactive? So we can toggle eye and eye/slash icon?
			 */
			triggerButton.firstElementChild?.setAttribute("icon", "eye-slash");
			this.input.type = "text";
		} else {
			triggerButton.setAttribute("aria-label", "Show password");
			triggerButton.setAttribute("aria-pressed", "false");
			/**
			 * Make icon attribute reactive? So we can toggle eye and eye/slash icon?
			 */
			triggerButton.firstElementChild?.setAttribute("icon", "eye");
			this.input.type = "password";
		}
	}

	/**
	 * @param {FormDataEvent} event
	 * @returns void
	 */
	setFormData = (event) => {
		const formData = event.formData;
		if (!this.hasAttribute("name")) {
			return console.warn(
				`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`,
			);
		}

		/**
		 * Fixes for not able to remove formdata event listener when disconnected
		 */
		if (!this.getForm()) {
			return;
		}
		// @ts-ignore
		formData.set(this.getAttribute("name"), this.value);
	};

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

	disconnectedCallback() {
		/**
		 * console.log(this.getForm()); // renders null when disconnected from DOM,
		 * so the following remove event listener is not working as expected.
		 */
		this.getForm()?.removeEventListener("formdata", this.setFormData);
	}
}

customElements.define("cc-password-field", CucumberPasswordField);

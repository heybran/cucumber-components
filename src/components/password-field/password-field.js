import FormElement from "../../shared/form-element.js";
import BreezeIcon from "../icon/icon.js";
import sharedCss from "../../shared/shared.css?inline";
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
	 * @param {string} arg
	 */
	set pattern(arg) {
		this.input.pattern = arg;
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
		super.render(html, css, sharedCss);

		requestAnimationFrame(() => {
			const id = `input-${this.uuid()}`;
			// @ts-ignore
			this.shadowRoot.querySelector('[part="label"]').setAttribute("for", id);
			this.input.id = id;
			const form = this.getForm();
			if (!form) return;
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
				// Object.defineProperty(form.__cucumberElements, `${this.localName}-${this.uuid()}`, {
				// 	value: this,
				// });
			}
			form.__cucumberElements.push(this);
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

		if (this.hasAttribute("pattern")) {
			// @ts-ignore
			this.input.pattern = this.getAttribute("pattern");
		}

		if (this.hasAttribute("minlength")) {
			this.input.setAttribute("minlength", this.getAttribute("minlength"));
		}

		if (this.hasAttribute("maxlength")) {
			this.input.setAttribute("maxlength", this.getAttribute("maxlength"));
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
			/**
			 * Reset validity to empty string otherwise this field
			 * will stay invalid forever.
			 */
			this.input.setCustomValidity("");
			this.dispatchEvent(new Event("change"));
		});
	}

	/**
	 *
	 * @param {string} text
	 */
	setCustomValidity(text) {
		this.input.setCustomValidity(text);
	}

	/**
	 * This is not the correct behavior, as native input field, if invalid,
	 * the form is not submitted.
	 * We're adding event listener on 'submit' which does not align with native behavior.
	 * Instead, we should listen for click event from submit button,
	 * actually submit button should check validity from custom elements,
	 * only fire submit event if all fields are valid.
	 * Only doing this, we can mimic the native report validity bebavior.
	 */
	reportValidity() {
		this.input.reportValidity();
		// if (this.input.validity.valueMissing) {
		// 	/**
		// 	 * Native patternMismatch message.
		// 	 * But setting a custom error message somehow set the input.validity.customError = true,
		// 	 * which results in input is invalid, if you follow this steps, input will never be valid
		// 	 * unless refresh page and then enter the pattern-matched password.
		// 	 * Steps to replicate:
		// 	 * 	1. Enter a invalid password
		// 	 * 	2. Submit the form, custom error shown, all good here
		// 	 * 	3. Enter a valid password
		// 	 * 	4. Submit the form, no custom error shown, all good so far,
		// 	 * 	but form is not submitted as we're checking all fields valid state
		// 	 * 	at submit button, and this input field is invalid (customError = true)
		// 	 */
		// 	this.input.setCustomValidity('Please fill in this field');
		// 	this.input.reportValidity();
		// } else if (this.input.validity.patternMismatch) {
		// 	/**
		// 	 * Native patternMismatch message.
		// 	 */
		// 	this.input.setCustomValidity('Please match the format requested.');
		// 	this.input.reportValidity();
		// } else if (this.input.validity.tooShort) {
		// 	/**
		// 	 * Native patternMismatch message.
		// 	 */
		// 	this.input.setCustomValidity(`
		// 		Please lenghthen this text to ${this.getAttribute('minlength')} characters or more (you are currently using ${this.input.value?.length} character${this.input.value?.length > 1 ? 's' : ''}).
		// 	`);
		// 	this.input.reportValidity();
		// }
	}

	isValid() {
		return this.input.checkValidity();
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
				`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`
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
	static get observedAttributes() {}

	/**
	 * @param {string} attr
	 * @param {string} oldValue
	 * @param {string} newValue
	 */
	attributeChangedCallback(attr, oldValue, newValue) {}

	disconnectedCallback() {
		/**
		 * console.log(this.getForm()); // renders null when disconnected from DOM,
		 * so the following remove event listener is not working as expected.
		 */
		this.getForm()?.removeEventListener("formdata", this.setFormData);
	}
}

customElements.define("cc-password-field", CucumberPasswordField);

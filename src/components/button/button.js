import FormElement from "../../shared/form-element.js";
import css from "./button.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import html from "./button.html?raw";

export default class CucumberButton extends FormElement {
	constructor() {
		super();
		this.render(html, css, sharedCss);
	}

	get type() {
		return this.getAttribute("type");
	}

	connectedCallback() {
		this._connected = true;
		this.loading = this.hasAttribute("loading");
		this.disabled = this.hasAttribute("disabled");
		if (this.type) {
			this.button.setAttribute("type", this.type);
			this.handleButtonClick(this.type);
		} else if (this.hasAttribute('href')) {
			this.anchor = document.createElement('a');
			this.anchor.setAttribute('href', this.getAttribute('href'));
			this.anchor.setAttribute('part', 'button');
			if (this.hasAttribute('target')) {
				this.anchor.setAttribute('target', this.getAttribute('target'));
				this.anchor.setAttribute('rel', 'noreferrer noopener');
			} else if (this.hasAttribute('download')) {
				this.anchor.setAttribute('download', this.getAttribute('download'));
			}
			this.anchor.append(...this.button.children);
			this.button.replaceWith(this.anchor);
		}
	}

	/**
	 *
	 * @param {string} type
	 */
	handleButtonClick(type) {
		if (!["submit", "reset"].includes(type)) {
			return;
		}

		const form = this.getForm();

		if (!form) {
			return console.warn(
				`cc-button has type ${type} but no associated form is found`,
			);
		}

		document.addEventListener('keypress', (event) => {
			if (!(event.key === 'Enter' && document.activeElement.closest('form') === form)) return;
			this.submitForm(form, type);
		});

		this.button.addEventListener("click", (event) => {
			this.submitForm(form, type);	
		});
	}

	validateForm(form) {
		/**
		 * @see https://codepen.io/brandonzhang/pen/ZEmpqVV
		 * For non custom elements, when form submitted, 
		 * the very first invalid field is reporting error message,
		 * but for form with cc components, last component reports error message. 
		 * So, need to sort __cucumberElements by their DOM index.
		 * Adding a reverse() seems to match native behavior,
		 * but the thing is the components of original __cucumberElements are in asc order
		 * by their position inside the form already.
		 * 
		 * @todo Circle back to this some other time.
		 */
		const invalidFields = [...form.__cucumberElements]?.filter((field) => !field.isValid())?.reverse();
		if (invalidFields?.length > 0) {
			invalidFields.forEach((field) => field.reportValidity());
			/**
			 * Reset __cucumberElements array otherwise form will never be submitted.
			 * Updated: This will cause an even nastier bug as skipping the validation step
			 * and submit the form immediately.
			 */
			// form.__cucumberElements = [];
			return false;
		}

		return true;
	}

	submitForm(form, type) {
		const valid = this.validateForm(form);
		if (!valid) return;
		const fakeButton = document.createElement('button');
		/**
		 * Connect current component to this fake button,
		 * so we can grab current component from event.submitter.host 
		 */
		fakeButton.host = this;
		fakeButton.setAttribute('type', type);
		fakeButton.style.position = 'absolute';
		form.appendChild(fakeButton);
		fakeButton.click();
		fakeButton.remove();
	}

	/**
	 * @returns {HTMLButtonElement}
	 */
	get button() {
		// @ts-ignore
		return this.shadowRoot.querySelector("[part=button]"); // #14
	}

	static get observedAttributes() {
		return ["type", "loading", "disabled"];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		/**
		 * BUG: from <cc-button></cc-button> to
		 * <cc-button disabled></cc-button> oldValue is null
		 */
		if (null === oldValue && !this._connected) {
			return;
		}

		if (attr === "type") {
			this.button.setAttribute(attr, newValue);
		} else if (attr === "loading") {
			this.loading = this.hasAttribute("loading");
		} else if (attr === "disabled") {
			this.disabled = this.hasAttribute("disabled");
		}
	}

	/**
	 * @returns {boolean}
	 */
	get loading() {
		return this.hasAttribute("loading");
	}

	set loading(flag) {
		if (flag) {
			import("../spinner/spinner.js").then(({ default: CucumberSpinner }) => {
				const spinner = document.createElement('cc-spinner');
				spinner.setAttribute("part", "spinner");
				this.button.append(spinner);
				this.button.setAttribute("aria-busy", "true");
			});
		} else {
			this.button.querySelector('[part="spinner"]')?.remove();
			this.button.removeAttribute("aria-busy");
		}
	}

	/**
	 * @returns {boolean}
	 */
	get disabled() {
		return this.hasAttribute("disabled");
	}

	set disabled(flag) {
		if (flag) {
			this.button.setAttribute("disabled", "");
			this.button.setAttribute("aria-disabled", "true");
		} else {
			this.button.removeAttribute("disabled");
			this.button.setAttribute("aria-disabled", "false");
		}
	}
}

if (!customElements.get("cc-button")) {
	customElements.define("cc-button", CucumberButton);
}

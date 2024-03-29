import FormElement from "../../shared/form-element.js";
import "../icon/icon.js";
import sharedCss from "../../shared/shared.css?inline";
import css from "./checkbox.css?inline";
import html from "./checkbox.html?raw";

export default class CucumberCheckbox extends FormElement {
	/**
	 * @param {boolean} flag
	 */
	set checked(flag) {
		// @ts-ignore
		this.input.checked = flag;
		this.input.ariaChecked = flag ? "true" : "false";
	}

	/**
	 * @param {boolean} flag
	 */
	set disabled(flag) {
		// @ts-ignore
		this.input.disabled = flag;
	}

	/**
	 * @param {boolean} flag
	 */
	set required(flag) {
		this.input.required = flag;
	}

	/**
	 * @param {string} arg
	 */
	set value(arg) {
		this.input.value = arg;
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
	set name(arg) {
		this.input.name = arg;
	}

  /**
	 * @param {string} arg
	 */
  set label(arg) {
    // @ts-ignore
    this.shadowRoot.querySelector('[part="label"] slot')
      .textContent = arg;
  }

	connectedCallback() {
		super.render(html, css, sharedCss);
		this._connected = true;
		this.checked = this.hasAttribute("checked");
		this.disabled = this.hasAttribute("disabled");
		if (this.hasAttribute("value")) {
			this.value = this.getAttribute("value");
		}

		if (this.hasAttribute("name")) {
			this.name = this.getAttribute("name");
		}

    if (this.hasAttribute('label')) {
      this.label = this.getAttribute('label');
    }

		/**
		 * Store an initial value to be used on form resetting
		 */
		this._initialChecked = this.hasAttribute("checked");

		this.required = this.hasAttribute("required");
		this.defer(() => {
			const form = this.getForm();
			if (!form) return;
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
				form.__cucumberElements.push(this);
			}
		});

		this.getForm()?.addEventListener("formdata", this.setFormData);

		this.getForm()?.addEventListener("reset", (event) => {
			// @ts-ignore
			if (this._initialChecked === this.hasAttribute("checked")) {
				return;
			}

			if (this._initialChecked) {
				this.setAttribute("checked", "");
			} else {
				this.removeAttribute("checked");
			}
		});
	}

	static get observedAttributes() {
		return ["checked", "disabled"];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if (oldValue === null) {
			return;
		}
		if (attr === "checked") {
			this.checked = this.hasAttribute("checked");
		} else if (attr === "disabled") {
			this.disabled = this.hasAttribute("disabled");
		}
	}

	/**
	 * @returns boolean
	 */
	isValid() {
		/**
		 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
		 * Although can't think of any cases where required on a checkbox makes sense!
		 */
		if (this.hasAttribute('required')) {
			return this.checkValidity();
		}

		return true;
	}

	/**
	 * 
	 * @returns boolean
	 */
	checkValidity() {
		return this.input.checkValidity();
	}

	/**
	 * @returns void
	 */
	onInputChange() {
		this.toggleAttribute("checked", this.input.checked);
		this.input.ariaChecked = this.input.checked ? "true" : "false";
		this.dispatchEvent(new Event('change'));
	}
}

if (!customElements.get("cc-checkbox")) {
	customElements.define("cc-checkbox", CucumberCheckbox);
}

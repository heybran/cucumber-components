import FormElement from "../../shared/form-element.js";
import css from "./radio-group.css?inline";
import html from "./radio-group.html?raw";

export default class CucumberRadioGroup extends FormElement {
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
		this.setAttribute('aria-disabled', flag ? 'true' : 'false');
		// disable all slot radio buttons
		if (flag) {
			this.defaultSlot.assignedElements().forEach((radio) => radio.setAttribute('disabled', ''));
		} else {
			this.defaultSlot.assignedElements().forEach((radio) => radio.removeAttribute('disabled'));
		}
	}

	/**
	 * @param {boolean} flag
	 */
	set required(flag) {
		this.input.required = flag;
	}

	/**
	 * @returns {string|null}
	 */
	get value() {
		const selectedRadio = this.defaultSlot.assignedElements().find((radio) => {
			return radio.hasAttribute('checked');
		});

		if (selectedRadio) {
			// @ts-ignore
			return selectedRadio.value;
		}

		return null;
	}

  /**
	 * @param {string} arg
	 */
  set label(arg) {
    // @ts-ignore
    this.shadowRoot.querySelector('slot[name="label"]')
      .textContent = arg;
  }

	connectedCallback() {
		super.render(html, css);
		this._connected = true;
		this.disabled = this.hasAttribute("disabled");

    if (this.hasAttribute('label')) {
			// @ts-ignore
      this.label = this.getAttribute('label');
    }

		/**
		 * Store an initial value to be used on form resetting
		 */
		this._initialChecked = this.defaultSlot.assignedElements().find((radio) => radio.hasAttribute('selected'));

		// this.required = this.hasAttribute("required");
		this.defer(() => {
			const form = this.getForm();
			if (!form) return;
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
				form.__cucumberElements.push(this);
			}

			/**
			 * @todo
			 * Below codes will not run if radio-group is not wrapped in a form
			 */

			/**
			 * Tab + Shift: Move focus into and out of the radio group. 
			 * When focus moves into a radio group, and a radio button is already checked, 
			 * focus is set on the checked button. 
			 * If none of the radio buttons are checked, 
			 * focus is set on the first radio button in the group.
			 * 
			 * !this.value meaning all radio buttons are unchecked initially
			 */
			if (!this.value) {
				this.defaultSlot.assignedElements()[0].input.setAttribute('tabindex', '0');
			}
		});

		this.defaultSlot.assignedElements().forEach((radio) => {
			radio.addEventListener('change', (event) => {
				const siblingRadios = this.defaultSlot.assignedElements().filter((radio) => {
					return radio !== event.target;
				});
				siblingRadios.forEach((radio) => radio.removeAttribute('checked'));
			});
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
	 * @returns void
	 */
	onInputChange() {
		this.toggleAttribute("checked", this.input.checked);
		this.input.ariaChecked = this.input.checked ? "true" : "false";
	}
}

if (!customElements.get("cc-radio-group")) {
	customElements.define("cc-radio-group", CucumberRadioGroup);
}

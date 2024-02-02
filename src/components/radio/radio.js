import FormElement from "../../shared/form-element.js";
import "../icon/icon.js";
import sharedCss from "../../shared/shared.css?inline";
import css from "./radio.css?inline";
import html from "./radio.html?raw";

export default class CucumberRadio extends FormElement {
	/**
	 * @param {boolean} flag
	 */
	set checked(flag) {
		// @ts-ignore
		this.input.checked = flag;
		this.input.ariaChecked = flag ? "true" : "false";
		/**
		 * Tab + Shift: Move focus into and out of the radio group. 
		 * When focus moves into a radio group, and a radio button is already checked, 
		 * focus is set on the checked button. 
		 * If none of the radio buttons are checked, 
		 * focus is set on the first radio button in the group.
		 */
		this.input.setAttribute('tabindex', flag ? '0' : '-1');
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

		/**
		 * A radio element alone should not connect to formdata event.
		 */
		// this.defer(() => {
		// 	const form = this.getForm();
		// 	if (!form) return;
		// 	if (!Array.isArray(form.__cucumberElements)) {
		// 		form.__cucumberElements = [];
		// 	}
		// 	form.__cucumberElements.push(this);
		// });

		this.defer(() => {
			this.addEventListener('keydown', (event) => {
				/**
				 * Prevent default otherwise currently-checked radio 
				 * will be unchecked once Space key is pressed.
				 */
				if (event.key === ' ' && this.hasAttribute('checked')) {
					event.preventDefault();
				}

				/**
				 * Exit on radios that are not currently focused.
				 */
				if (document.activeElement !== this) {
					return;
				}

				/**
				 * Right Arrow and Down Arrow:
				 * Move focus to and checks the next radio button in the group, 
				 * unchecking the previously focused radio button. 
				 * If focus is on the last radio button, focus moves to the first radio button.
				 * 
				 * @todo
				 * FIXME: Pressing down arrow scroll the document...
				 */
				if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
					event.preventDefault();
					let nextRadio = this.nextElementSibling;
					if (!nextRadio) {
						nextRadio = Array.from(this.parentElement.children).find(elem => elem.localName === this.localName);
					}
					nextRadio.input.focus();
					nextRadio.input.click();
				}

				/**
				 * Left Arrow and Up Arrow:
				 * Move focus to and checks the previous radio button in the group, 
				 * unchecking the previously focused radio button. 
				 * If focus is on the first radio button, focus moves to the last radio button.
				 * 
				 * @todo
				 * FIXME: Pressing up arrow scroll the document...
				 */
				if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
					event.preventDefault();
					let prevRadio = this.previousElementSibling;
					if (!prevRadio) {
						prevRadio = Array.from(this.parentElement.children).findLast(elem => elem.localName === this.localName);
					}
					prevRadio.input.focus();
					prevRadio.input.click();
				}
			});
		});

		// this.getForm()?.addEventListener("formdata", this.setFormData);

		// this.getForm()?.addEventListener("reset", (event) => {
		// 	// @ts-ignore
		// 	if (this._initialChecked === this.hasAttribute("checked")) {
		// 		return;
		// 	}

		// 	if (this._initialChecked) {
		// 		this.setAttribute("checked", "");
		// 	} else {
		// 		this.removeAttribute("checked");
		// 	}
		// });
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
	onInputChange(event) {
		this.toggleAttribute("checked", this.input.checked);
		this.input.ariaChecked = this.input.checked ? "true" : "false";
		this.input.setAttribute('tabindex', this.input.checked ? '0' : '-1');
		this.dispatchEvent(new Event('change', {
			bubbles: true,
		}));
	}
}

if (!customElements.get("cc-radio")) {
	customElements.define("cc-radio", CucumberRadio);
}

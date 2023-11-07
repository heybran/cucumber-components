// @ts-check
import html from "./select.html?raw";
import css from "./select.css?inline";
import sharedCss from "../../shared/shared.css?inline";
import "../icon/icon.js";
import FormElement from "../../shared/form-element.js";
import { SELECT_FIELD } from "../../shared/form-field-properties";

export default class CucumberSelect extends FormElement {
	constructor() {
		super();
		this.render(html, css, sharedCss);
	}

  /**
   * @param {string} text 
   */
	onLabelChange(text) {
    // @ts-ignore
    this.shadowRoot.querySelector('slot[name="label"]').textContent = text;
  }

  /**
   * @param {string} text
   */
  onHelperTextChange(text) {
    // @ts-ignore
    this.shadowRoot.querySelector('slot[name="helper-text"]').textContent = text;
  }

	/** @returns {string} */
	get value() {
		return this.selectedOption.value;
	}

	/** @returns {string} */
	get text() {
		return this.selectedOption.text;
	}

	/**
	 * @returns {HTMLElement}
	 * @throws {Error} - No cc-option element error
	 */
	get selectedOption() {
		const option = this.querySelector('[role="option"]');
		if (!option) {
			throw new Error(`Missing 'cc-option' inside 'cc-select'`);
		}

		const selectedOption = this.querySelector(
			'[role="option"][aria-selected="true"]'
		);

		if (!selectedOption) {
			console.info(`
        No 'selected' attribute found on 'cc-option',
        default to first 'cc-option'.
      `);
			return option;
		}

		return selectedOption;
	}

	/** @returns {HTMLElement[]} */
	get options() {
		return this.querySelectorAll("cc-option");
	}

	static get observedAttributes() {
		return [...Object.keys(SELECT_FIELD)];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		super.attributeChangedCallback(attr, oldValue, newValue, SELECT_FIELD);
	}

	connectedCallback() {
		/**
		 * Update initial selected option when component is connected.
		 * 
		 * Error: Uncaught Error: Missing 'cc-option' inside 'cc-select'
		 */
		setTimeout(() => this.reflectTarget.setAttribute('value', this.selectedOption.text), 0);
		this.addEventListener('cc-option-selected', this.handleSelect.bind(this));
		this.addEventListener('keydown', this.onKeyDown);
		this.shadowRoot.querySelector('[part="input-container"]').addEventListener('click', this.toggleDropdown.bind(this));
		this.dropdown?.addEventListener('close', this.onDropdownClose.bind(this));
		requestIdleCallback(() => {
			const id = this.uuid();
		  this.shadowRoot.querySelector('label').id = 'combo-label-' + id;
		  this.trigger.setAttribute('aria-labelledby', 'combo-label-' + id);
		  this.dropdown.setAttribute('aria-labelledby', 'combo-label-' + id);
		  this.dropdown?.setAttribute('id', 'listbox-' + id);
		  this.trigger?.setAttribute('aria-controls', 'listbox-' + id);
		  /**
		   * Get current selected option, set an id and update 'aria-activedescendant' aria attribute
		   */
		  const options = this.querySelectorAll('[role="option"]');
		  Array.from(options).forEach((option, i) => {
		    option.id = `combo-${id}-${i}`;
		  });
		  this.trigger.setAttribute('aria-activedescendant', this.selectedOption.id);
			// @ts-ignore
			const form = this.getForm();
			if (!form) return;
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
			}
		  form.__cucumberElements.push(this);
		  form.addEventListener('formdata', this.setFormData);
		});
	}

	/**
	 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes
	 * required: A Boolean attribute indicating that an option with a
	 * non-empty string value must be selected.
	 *
	 * @returns boolean
	 */
	isValid() {
		if (!this.hasAttribute("required")) {
			return true;
		}

		if (this.selectedOption.value !== "") {
			return true;
		}

		return false;
	}

	/**
	 * @param {Event} event
	 * @returns void
	 */
	onDropdownClose(event) {
		/**
		 * Update aria-expanded on trigger button
		 */
		this.trigger?.setAttribute("aria-expanded", "false");

		/**
		 * Remove support of selecting option when typing, (TODO) need review.
		 */
		this.dropdown?.removeEventListener("keydown", this.selectOptionWhenTyping);
	}

	/**
	 * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
	 * @param {KeyboardEvent} event
	 */
	onKeyDown = (event) => {
		if (!this.isSelfFocused) {
			return;
		}

		if (!this.isListboxOpen) {
			/**
			 * Down Arrow:
			 * - Opens the listbox if it is not already displayed without moving focus or changing selection.
			 * - DOM focus remains on the combobox.
			 */
			if (event.key === "ArrowDown") {
				event.preventDefault();
				this.openDropdown();
			}

			/**
			 * Up Arrow:
			 * - First opens the listbox if it is not already displayed and then moves visual focus to the first option.
			 * - DOM focus remains on the combobox.
			 * - But native select element does not have this behavior:
			 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
			 */
			if (event.key === "ArrowUp") {
				event.preventDefault();
				this.openDropdown();
			}

			if (event.key === "Home") {
				event.preventDefault();
				this.openDropdown();
			}

			if (event.key === "End") {
				event.preventDefault();
				this.openDropdown();
			}
		} else {
			if (event.key === "Escape" || event.key === 'Tab') {
				return this.closeDropdown();
			}

			if (event.key === "Enter" || event.key === " ") {
				const currentOption = this.querySelector(".current");
				if (!currentOption || currentOption === this.selectedOption) {
					return;
				}
				this.selectOption(currentOption);
				// Below line is not needed as Pressing Enter key will automatically close the listbox
				this.closeDropdown();
				event.preventDefault();
				return;
			}

			if (!["ArrowDown", "ArrowUp"].includes(event.key)) {
				return;
			}

			event.preventDefault();

			const options = Array.from(this.options);
			this.previousOption = this.querySelector(".current");
			if (!this.previousOption) {
				this.previousOption = this.selectedOption;
			}

			let index = options.indexOf(this.previousOption);
			let nextIndex = index + 1 === options.length ? 0 : index + 1;
			let previousIndex = index === 0 ? options.length - 1 : index - 1;

			// this.selectedOption.setAttribute('aria-selected', 'false');
			if (event.key === "ArrowDown") {
				this.previousOption.classList.remove("current");
				options[nextIndex]?.classList.add("current");
				// options[nextIndex]?.setAttribute('aria-selected', 'true');
			} else if (event.key === "ArrowUp") {
				this.previousOption.classList.remove("current");
				options[previousIndex]?.classList.add("current");
				// options[previousIndex]?.setAttribute('aria-selected', 'true');
			}
		}
	};

	/**
	 *
	 * @param {HTMLElement} option - cc-option element that user choose
	 */
	selectOption(option) {
		/**
		 * Update aria-selected attribute on current selected option prior to user action.
		 */
		this.selectedOption.setAttribute("aria-selected", "false");
		option.setAttribute("aria-selected", "true");
		/**
		 * Set current option value to reflect target to show to user.
		 */
    this.reflectTarget.setAttribute('value', option.text);
	}

	handleSelect(event) {
		const { value } = event.detail;
		if (this.value === value) {
			this.closeDropdown();
			return;
		}

		this.selectOption(event.target);
		this.closeDropdown(event);
		this.dispatchEvent(
			new CustomEvent("change", {
				bubbles: true,
				composed: true,
				cancelable: true,
				detail: {
					value,
				},
			})
		);
	}

	// handleUpAndDownArrows(event) {
	//   console.log(event);
	//   if (!['ArrowDown', 'ArrowUp'].includes(event.key)) {
	//     return;
	//   }

	//   const options = Array.from(this.options);
	//   let index = options.indexOf(this.selectedOption);
	//   let nextIndex = (index + 1 === options.length) ? 0 : (index + 1);
	//   let previousIndex = index === 0 ? options.length - 1 : index - 1;
	//   let currentOption = options.find((option) => option.classList.contains('current'));
	//   if (currentOption) {
	//     currentOption.classList.remove('current');
	//   }
	//   console.log(options[nextIndex]);
	//   if (event.key === 'ArrowDown') {
	//     options[nextIndex]?.classList.add('current');
	//   } else if (event.key === 'ArrowUp') {
	//     options[previousIndex]?.classList.add('current');
	//   }
	// }

	updatePosition() {
		const { left, top, width, height } = this.getBoundingClientRect();
		const availableHeight = window.innerHeight - height - top;
		this.style.setProperty("--left", `${left}px`);
		let dropdownTop;
		if (availableHeight + 10 > this.dropdown.clientHeight) {
			this.dropdown.style.setProperty("transform-origin", "top center");
			dropdownTop = top + height + 6;
		} else {
			this.dropdown.style.setProperty("transform-origin", "bottom center");
			dropdownTop = top - this.dropdown.clientHeight - 6;
		}
		this.style.setProperty("--top", `${dropdownTop}px`);
		this.style.setProperty("--width", `${width}px`);
	}

	closeDropdown(event) {
		this.removeEventListener('focusout', this.constructor.onFocusOutByTabKey);
		this.trigger.setAttribute("aria-expanded", "false");
		this.reflectTarget.focus();
		this.listbox.setAttribute('aria-expanded', 'false');
		this.trigger.setAttribute("aria-activedescendant", this.selectedOption.id);
		this.querySelector(".current")?.classList.remove("current");
		this.currentOption = null;
	}

	/**
	 * Close listbox when listbox is open while host is focused out.
	 * @param {FocusEvent} event 
	 */
	static onFocusOutByTabKey(event) {
		console.log(event);
		if (this.isListboxOpen) {
			this.closeDropdown(event);
		}
	}

	toggleDropdown(event) {
		if (this.isListboxOpen) {
			/**
			 * Pressing Enter key close the listbox is because when listbox
			 * is open, the cc-select button is still being focused,
			 * hence clicking Enter key acts as click event on the button element.
			 */
			return this.closeDropdown(event);
		}
		this.openDropdown(event);
	}

	openDropdown(event) {
		if (this.disabled) {
			return;
		}
		
		this.updatePosition();
		// this.dropdown?.classList.add('visible');
		// this.selectedOption?.focus();
		// this.selectedOption.classList.add('current');
		// this.dropdown.showModal();
		this.trigger.setAttribute("aria-expanded", "true");
    this.listbox?.setAttribute('aria-expanded', 'true');
		// this.dropdown.addEventListener('keydown', this.handleUpAndDownArrows.bind(this));
		// this.dropdown?.addEventListener('animationend', () => {
		//   this.trigger.setAttribute('aria-expanded', 'true');
		// });
		this.listbox.addEventListener("keydown", this.selectOptionWhenTyping);
		/**
		 * Add a focus out event to close listbox when component loses focus
		 */
		// this.addEventListener('focusout', this.constructor.onFocusOutByTabKey);
		/**
		 * This immediately close the dropdown after it's been open,
		 * how to fix this?
		 */
		document.addEventListener(
			"click",
			this.closeDropdownWhenClickOutside.bind(this)
		);
	}

	/**
	 * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
	 * Like an HTML <select>, users can type characters to select matching options.
	 * @param {KeyboardEvent} event
	 *
	 * @todo
	 */
	selectOptionWhenTyping = (event) => {
		console.log(this);
		var textTyped = event.key.toLowerCase();
		const option = Array.from(this.options).find((option) => {
			return option.text.toLowerCase().startsWith(textTyped);
		});

		if (!option) {
			return;
		}

		this.selectOption(option);
	};

	get dropdown() {
		return this.shadowRoot?.querySelector('[part="dropdown"]');
	}

	get trigger() {
		return this.shadowRoot?.querySelector('[aria-haspopup="listbox"]');
	}

  get listbox() {
    return this.shadowRoot?.querySelector('[role="listbox"]');
  }

	get isSelfFocused() {
		return document.activeElement === this;
	}

	get isListboxOpen() {
		return this.trigger.getAttribute("aria-expanded") === "true";
	}

	closeDropdownWhenClickOutside(event) {
		if (!this.isListboxOpen) {
			return;
		}

		if (!event.composedPath().includes(this)) {
			this.closeDropdown();
		}
	}

	// closeDropdownWhenPressESC(event) {
	//   if (event.key === "Escape" && this.dropdown.classList.contains('visible')) {
	//     this.closeDropdown();
	//   }
	// }
}

if (!customElements.get("cc-select")) {
	customElements.define("cc-select", CucumberSelect);
}

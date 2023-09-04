// @ts-check
import shared from "../../shared/shared.css?inline";
import css from "./select.css?inline";
import "../icon/icon.js";
import FormElement from "../../shared/form-element.js";

export default class CucumberSelect extends FormElement {
  /**
   * @returns {string}
   */
  get label() {
    return this.getAttribute('label') ?? '';
  }

  /**
   * @returns {string}
   */
  get placeholder() {
    return this.getAttribute('placeholder') ?? '';
  }

  /**
   * @returns {string}
   */
  get helperText() {
    return this.getAttribute('helper-text') ?? '';
  }

  /** @type {string} */
  // @property({ type: String }) text;

  /** @type {string} */
  // @property({ type: String }) value;

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
    const option = this.querySelector('cc-option');
    if (!option) {
      throw new Error(`Missing 'cc-option' inside 'cc-select'`);
    }

    const selectedOption = this.querySelector('cc-option[selected]');

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
    return this.querySelectorAll('cc-option');
  }

  /**
   * no solutions yet
   */
  // @query({ type: HTMLElement, selector: '[selected]' }) selectedOption;

  // @query({ type: HTMLElement, selector: '[part="dropdown"]',  }) dropdown;

  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
  }

    /**
   * @returns {string[]}
   */
  static get observedAttributes() {

  }

  /**
   * @param {string} attr 
   * @param {string} oldValue 
   * @param {string} newValue 
   */
  attributeChangedCallback(attr, oldValue, newValue) {

  }

  render() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div part="container">
        <label>${this.label}</label>
        <button 
          type="button"
          aria-expanded="false"
          aria-live="assertive"
          aria-label=""
          aria-describedby=""
          onclick="this.getRootNode().host.openDropdown(event);"
        >
          <slot name="prefix"></slot>
          <span class="text">${this.text}</span>
          <span part="suffix">
            <slot name="suffix">
              <cc-icon icon="chevron-down"></cc-icon>
            </slot>
          </span>
        </button>
        <dialog role="listbox" tabindex="-1" part="dropdown">
          <button part="close">
            <span class="sr-only">Close</span>
          </button>
          <div part="dropdown-content">
            <slot></slot>
          </div>
        </dialog>
      </div>
    `;
  }

  async connectedCallback() {
    await customElements.whenDefined(this.selectedOption.localName);
    this.render();
    document.addEventListener('click', this.closeDropdownWhenClickOutside.bind(this));
    window.addEventListener('scroll', this.updatePosition.bind(this));
    this.addEventListener('cc-option-selected', this.handleSelect.bind(this));
    this.addEventListener('keydown', this.onKeyDown);
    this.dropdown?.addEventListener('close', this.onDropdownClose.bind(this));

    this.defer(() => {
			const form = this.getForm();
			if (!form) return;
			if (!Array.isArray(form.__cucumberElements)) {
				form.__cucumberElements = [];
			}
      form.__cucumberElements.push(this);
		});

    this.defer(() => {
      this.getForm()?.addEventListener("formdata", this.setFormData);
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
    if (!this.hasAttribute('required')) {
      return true;
    }

    if (this.selectedOption.value !== '') {
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
    console.log(this.dropdown.returnValue);
    this.trigger?.setAttribute('aria-expanded', 'false');


    /**
     * Remove support of selecting option when typing, (TODO) need review.
     */
    this.dropdown?.removeEventListener('keydown', this.selectOptionWhenTyping);
  }

  /**
   * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
   * @param {KeyboardEvent} event 
   */
  onKeyDown = (event) => {
    if (!this.isSelfFocused) {
      return;
    }

    /**
     * Down Arrow: 
     * - Opens the listbox if it is not already displayed without moving focus or changing selection.
     * - DOM focus remains on the combobox.
     */
    if (event.key === 'ArrowDown') {
      this.openDropdown();
    }

    /**
     * Up Arrow: 
     * - First opens the listbox if it is not already displayed and then moves visual focus to the first option.
     * - DOM focus remains on the combobox.
     * - But native select element does not have this behavior: 
     * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
     */
    if (event.key === 'ArrowUp') {
      this.openDropdown();
    }

    if (event.key === 'Home') {
      this.openDropdown();
    }

    if (event.key === 'End') {
      this.openDropdown();
    }
  }

  handleSelect(event) {
    const { value } = event.detail;
    if (this.value === value) {
      this.dropdown.close();
      return;
    }

    this.selectedOption.removeAttribute('selected');
    event.target.setAttribute('selected', '');
    this.shadowRoot.querySelector('.text').textContent = event.target.text;
    this.dropdown.close();
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true, 
      composed: true, 
      cancelable: true,
      detail: {
        value
      }
    }));
  }

  handleUpAndDownArrows(event) {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) {
      return;
    }

    const options = Array.from(this.options);
    let index = options.indexOf(document.activeElement);
    let nextIndex = (index + 1 === options.length) ? 0 : (index + 1);
    let previousIndex = index === 0 ? options.length - 1 : index - 1;
    if (event.key === 'ArrowDown') {
      options[nextIndex]?.focus();
    } else if (event.key === 'ArrowUp') {
      options[previousIndex]?.focus(); 
    }
  }

  updatePosition() {
    const { left, top, width, height } = this.getBoundingClientRect();
    const availableHeight = window.innerHeight - height - top;
    this.style.setProperty("--left", `${left}px`);
    let dropdownTop;
    if (availableHeight + 10 > this.dropdown.clientHeight) {
      this.dropdown.style.setProperty('transform-origin', 'top center');
      dropdownTop = top + height + 6;
    } else {
      this.dropdown.style.setProperty('transform-origin', 'bottom center');
      dropdownTop = top - this.dropdown.clientHeight - 6;
    }
    this.style.setProperty("--top", `${dropdownTop}px`);
    this.style.setProperty("--width", `${width}px`);
  }

  openDropdown(event) {
    this.updatePosition();
    // this.dropdown?.classList.add('visible');
    this.selectedOption?.focus();
    this.dropdown.showModal();
    this.dropdown.addEventListener('keydown', this.handleUpAndDownArrows.bind(this));
    this.dropdown?.addEventListener('animationend', () => {
      this.trigger.setAttribute('aria-expanded', 'true');
    });
    this.dropdown?.addEventListener('keydown', this.selectOptionWhenTyping);
  }

  /**
   * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
   * Like an HTML <select>, users can type characters to select matching options.
   * @param {KeyboardEvent} event 
   */
  selectOptionWhenTyping = (event) => {
    console.log(this);
    var textTyped = event.key.toLowerCase();
    Array.from(this.options).forEach(option => {
      if (option.text.toLowerCase().startsWith(textTyped)) {
        option.focus();
      }
    });
  }

  get dropdown() {
    return this.shadowRoot?.querySelector('[part="dropdown"]');
  }

  get trigger() {
    return this.shadowRoot?.querySelector('button[type="button"]');
  }

  get isSelfFocused() {
    return document.activeElement === this;
  }

  closeDropdownWhenClickOutside(event) {
    if (
      !event.composedPath().includes(this.dropdown) && 
      this.trigger?.getAttribute('aria-expanded') === 'true') {
        this.dropdown.close('Click outside');
    }
  }

  // closeDropdownWhenPressESC(event) {
  //   if (event.key === "Escape" && this.dropdown.classList.contains('visible')) {
  //     this.closeDropdown();
  //   }
  // }
}

if (!customElements.get('cc-select')) {
  customElements.define('cc-select', CucumberSelect);
}

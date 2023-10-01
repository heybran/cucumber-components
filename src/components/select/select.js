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
    const option = this.querySelector('[role="option"]');
    if (!option) {
      throw new Error(`Missing 'cc-option' inside 'cc-select'`);
    }

    const selectedOption = this.querySelector('[role="option"][aria-selected="true"]');

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
          aria-haspopup="listbox"
          aria-live="assertive"
          role="combobox"
          onclick="this.getRootNode().host.toggleDropdown(event);"
        >
          <slot name="prefix"></slot>
          <span class="text">${this.text}</span>
          <span part="suffix">
            <slot name="suffix">
              <cc-icon icon="chevron-down"></cc-icon>
            </slot>
          </span>
        </button>
        <div role="listbox" tabindex="-1" part="dropdown">
          <button part="close">
            <span class="sr-only">Close</span>
          </button>
          <div part="dropdown-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  async connectedCallback() {
    await customElements.whenDefined(this.selectedOption.localName);
    this.render();
    window.addEventListener('scroll', this.updatePosition.bind(this));
    this.addEventListener('cc-option-selected', this.handleSelect.bind(this));
    this.addEventListener('keydown', this.onKeyDown);
    this.dropdown?.addEventListener('close', this.onDropdownClose.bind(this));

		requestIdleCallback(() => {
  		const id = this.uuid();
      this.shadowRoot.querySelector('label').id = 'combo-label-' + id;
      this.trigger.setAttribute('aria-labelledby', 'combo-label-' + id);
      this.dropdown.setAttribute('aria-labelledby', 'combo-label-' + id);

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

    if (!this.isListboxOpen) {
      /**
       * Down Arrow: 
       * - Opens the listbox if it is not already displayed without moving focus or changing selection.
       * - DOM focus remains on the combobox.
       */
      if (event.key === 'ArrowDown') {
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
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.openDropdown();
      }
  
      if (event.key === 'Home') {
        event.preventDefault();
        this.openDropdown();
      }
  
      if (event.key === 'End') {
        event.preventDefault();
        this.openDropdown();
      }
    }

    if (this.isListboxOpen) {
      if (event.key === 'Escape') {
        this.closeDropdown();
      }

      if (event.key === 'Enter' || event.key === ' ') {
        if (!this.currentOption || this.currentOption === this.selectOption) {
          return;
        }

        this.selectOption(this.currentOption);
      }

      if (!['ArrowDown', 'ArrowUp'].includes(event.key)) {
        return;
      }

      event.preventDefault();
  
      const options = Array.from(this.options);
      this.currentOption = this.querySelector('.current');
      if (!this.currentOption) {
        this.currentOption = this.selectedOption;
      }
      let index = options.indexOf(this.currentOption);
      let nextIndex = (index + 1 === options.length) ? 0 : (index + 1);
      let previousIndex = index === 0 ? options.length - 1 : index - 1;
      
      // this.selectedOption.setAttribute('aria-selected', 'false');
      if (event.key === 'ArrowDown') {
        this.currentOption.classList.remove('current');
        options[nextIndex]?.classList.add('current');
        // options[nextIndex]?.setAttribute('aria-selected', 'true');
      } else if (event.key === 'ArrowUp') {
        this.currentOption.classList.remove('current');
        options[previousIndex]?.classList.add('current'); 
        // options[previousIndex]?.setAttribute('aria-selected', 'true');
      }
    }
  }

  /**
   * 
   * @param {HTMLElement} option 
   */
  selectOption(option) {
    this.selectedOption.setAttribute('aria-selected', 'false');
    option.setAttribute('aria-selected', 'true');
    this.shadowRoot.querySelector('.text').textContent = option.text;
    this.closeDropdown();
  }

  handleSelect(event) {
    const { value } = event.detail;
    if (this.value === value) {
      this.closeDropdown();
      return;
    }

    this.selectedOption.setAttribute('aria-selected', 'false');
    event.target.setAttribute('aria-selected', 'true');
    this.shadowRoot.querySelector('.text').textContent = event.target.text;
    this.closeDropdown();
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true, 
      composed: true, 
      cancelable: true,
      detail: {
        value
      }
    }));
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
      this.dropdown.style.setProperty('transform-origin', 'top center');
      dropdownTop = top + height + 6;
    } else {
      this.dropdown.style.setProperty('transform-origin', 'bottom center');
      dropdownTop = top - this.dropdown.clientHeight - 6;
    }
    this.style.setProperty("--top", `${dropdownTop}px`);
    this.style.setProperty("--width", `${width}px`);
  }

  closeDropdown(event) {
    this.trigger.setAttribute('aria-expanded', 'false');
    this.trigger.setAttribute('aria-activedescendant', this.selectedOption.id);
    this.querySelector('.current')?.classList.remove('current');
    this.currentOption = null;
  }

  toggleDropdown(event) {
    if (this.isListboxOpen) {
      return this.closeDropdown();
    }
    this.openDropdown(event);
  }

  openDropdown(event) {
    this.updatePosition();
    // this.dropdown?.classList.add('visible');
    // this.selectedOption?.focus();
    // this.selectedOption.classList.add('current');
    // this.dropdown.showModal();
    this.trigger.setAttribute('aria-expanded', 'true');
    // this.dropdown.addEventListener('keydown', this.handleUpAndDownArrows.bind(this));
    // this.dropdown?.addEventListener('animationend', () => {
    //   this.trigger.setAttribute('aria-expanded', 'true');
    // });
    this.dropdown?.addEventListener('keydown', this.selectOptionWhenTyping);
    /**
     * This immediately close the dropdown after it's been open,
     * how to fix this?
     */
    document.addEventListener('click', this.closeDropdownWhenClickOutside.bind(this));
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
    return this.shadowRoot?.querySelector('button[aria-haspopup="listbox"]');
  }

  get isSelfFocused() {
    return document.activeElement === this;
  }

  get isListboxOpen() {
    return this.trigger.getAttribute('aria-expanded') === 'true';
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

if (!customElements.get('cc-select')) {
  customElements.define('cc-select', CucumberSelect);
}

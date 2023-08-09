// @ts-check
import { customElement, property, query } from "../../util/decorators.js";
import shared from "../shared/shared.css";
import css from "./breeze-select.css?inline";

@customElement('breeze-select')
export default class BreezeSelect extends HTMLElement {
  static get is() {
    return `breeze-select`;
  }
  /** @type {string} */
  @property({ type: String }) label;

  /** @type {string} */
  @property({ type: String }) placeholder;

  /** @type {string} */
  @property({ type: String }) helperText; // helper-text

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
   * @throws {Error} - No breeze-option element error
   */
  get selectedOption() {
    const option = this.querySelector('breeze-option');
    if (!option) {
      throw new Error(`Missing 'breeze-option' inside 'breeze-select'`);
    }

    const selectedOption = this.querySelector('breeze-option[selected]');

    if (!selectedOption) {
      console.info(`
        No 'selected' attribute found on 'breeze-option',
        default to first 'breeze-option'.
      `);
      return option;
    }
    
    return selectedOption;
  }

  /** @returns {HTMLElement[]} */
  get options() {
    return this.querySelectorAll('breeze-option');
  }

  /**
   * no solutions yet
   */
  // @query({ type: HTMLElement, selector: '[selected]' }) selectedOption;

  // @query({ type: HTMLElement, selector: '[part="dropdown"]',  }) dropdown;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render() {
    // @ts-ignore
    console.log(this.selectedOption);
    console.log(this.selectedOption.text);
    console.log('select', performance.now());

    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div part="container">
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
          <slot name="suffix"></slot>
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
    this.addEventListener('breeze-option-selected', this.handleSelect.bind(this));
    this.addEventListener('keydown', this.openWithArrows);
    this.dropdown?.addEventListener('close', this.onDropdownClose.bind(this));
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
  openWithArrows = (event) => {
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
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

  /** @returns {HTMLElement} */
  get selectedOption() {
    return this.querySelector('[selected]');
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

  connectedCallback() {
    this.render();
    document.addEventListener('click', this.closeDropdownWhenClickOutside.bind(this));
    document.addEventListener('keydown', this.closeDropdownWhenPressESC.bind(this));
    window.addEventListener('scroll', this.updatePosition.bind(this));
    this.addEventListener('breeze-option-selected', this.handleSelect.bind(this));
  }

  handleSelect(event) {
    const { value } = event.detail;
    if (this.value === value) {
      this.closeDropdown();
      return;
    }

    this.selectedOption.removeAttribute('selected');
    event.target.setAttribute('selected', '');
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
    this.dropdown?.classList.add('visible');
    this.classList.add('dropdown-opened');
    this.dropdown?.addEventListener('animationend', () => {
      this.trigger.setAttribute('aria-expanded', 'true');
    });
  }

  closeDropdown() {
    this.trigger.setAttribute('aria-expanded', 'false');
    this.dropdown?.classList.remove('visible');
    this.classList.remove('dropdown-opened');
  }

  get dropdown() {
    return this.shadowRoot?.querySelector('[part="dropdown"]');
  }

  get trigger() {
    return this.shadowRoot?.querySelector('button[type="button"]');
  }

  closeDropdownWhenClickOutside(event) {
    if (
      !event.composedPath().includes(this.dropdown) && 
      this.trigger?.getAttribute('aria-expanded') === 'true') {
        this.closeDropdown();
    }
  }

  closeDropdownWhenPressESC(event) {
    if (event.key === "Escape" && this.dropdown.classList.contains('visible')) {
      this.closeDropdown();
    }
  }

  render() {
    // @ts-ignore
    console.log(this.selectedOption.text);
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
        <div role="dialog" tabindex="-1" part="dropdown">
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
}
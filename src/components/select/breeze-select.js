// @ts-check
import { customElement, property, query } from "../../util/decorators";
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
  @property({ type: String }) text;

  /** @type {string} */
  @property({ type: String }) value;

  /**
   * no solutions yet
   */
  @query({ type: HTMLElement, selector: '[selected]' }) selectedOption;

  // @query({ type: HTMLElement, selector: '[part="dropdown"]',  }) dropdown;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.root = this.shadowRoot;
  }

  connectedCallback() {
    this.render();
    document.addEventListener('click', this.closeDropdownWhenClickOutside.bind(this));
  }

  openDropdown(event) {
    const { left, top, width, height } = this.getBoundingClientRect();
    this.style.setProperty("--left", `${left}px`);
    this.style.setProperty("--top", `${top}px`);
    this.style.setProperty("--width", `${width}px`);
    this.dropdown?.classList.add('visible');
    this.dropdown?.addEventListener('transitionend', () => {
      this.trigger.setAttribute('aria-expanded', 'true');
    });
  }

  closeDropdown() {
    this.trigger.setAttribute('aria-expanded', 'false');
    this.dropdown?.classList.remove('visible');
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

  async render() {
    // @ts-ignore
    this.root.innerHTML = `
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
          <span>${await customElements.whenDefined(this.selectedOption.localName).then(() => this.selectedOption.text)}</span>
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
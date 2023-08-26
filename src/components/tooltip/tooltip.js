import shared from "../../shared/shared.css?inline";
import css from "./tooltip.css?inline";
import calculatePosition from "../../util/position-calculator";

export default class BreezeTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * @returns {HTMLElement}
   */
  get target() {
    /**
     * If slot attribute is present, target should be the custom element that owns the slot
     */
    if (this.hasAttribute('slot')) {
      const host = this.assignedSlot?.getRootNode().host;
      return host;
    }

    /**
     * <h2 id="heading">Heading with tooltip</h2>
     * <breeze-tooltip for="heading" text="This is a tooltip" position="top-center"></-tooltip>
     * - look for sibling elements or ancestor elements
     */
    if (this.hasAttribute('for')) {
      // TODO
    }

    // TODO: fallback?
  }

  connectedCallback() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div part="content" class="content">
        ${this.getAttribute('text') ?? this.innerHTML}
      </div>
    `;
    
    if (this.target) {
      this.target?.addEventListener('focusin', this.openTooltip);
      this.target?.addEventListener('focusout', this.closeTooltip);
      this.target?.addEventListener('mouseenter', this.openTooltip);
      this.target?.addEventListener('mouseleave', this.closeTooltip);
      
    }
  }

  /**
   * https://www.w3.org/WAI/about/using-wai-material/
   * It typically appears after a small delay and disappears when Escape is pressed or on mouse out.
   * @param {KeyboardEvent} event 
   */
  onKeydown = (event) => {
    if (!this.opened) return;
    if (event.key === 'Escape') {
      this.closeTooltip();
    }
  }

  get opened() {
    return this.classList.contains('visible');
  }

  /**
   * @returns {boolean}
   */
  get hasArrow() {
    return true;
  }

  /**
   * @returns {string}
   */
  get position() {
    if (!this.hasAttribute('position')) {
      return 'top';
    } 

    return this.getAttribute('position')?.trim();
  }

  /**
   * @returns {HTMLElement}
   */
  get content() {
    // @ts-ignore
    return this.shadowRoot.querySelector(".content");
  }

  closeTooltip = () => {
    this.classList.remove("visible");
    document.removeEventListener('keydown', this.onKeydown);
    document.removeEventListener("wheel", this.onScroll);
  }

  openTooltip = () => {
    this.setPosition();
    this.classList.add("visible");
    document.addEventListener('keydown', this.onKeydown);
    document.addEventListener("wheel", this.onScroll);
  }

  get arrowSize() {
    const stringValue = window.getComputedStyle(this).getPropertyValue('--tooltip-arrow-size');
    return +stringValue.replace('px', '');
  }

  setPosition() {
    const { x, y } = calculatePosition({
      element: this, 
      target: this.target,
      position: this.position,
      offset: 2 + this.arrowSize,
    });
    this.style.setProperty("--tooltip-left", `${x}px`);
    this.style.setProperty("--tooltip-top", `${y}px`);
  }

  onScroll = () => {
    this.setPosition();
  }
}

if (!customElements.get('breeze-tooltip')) {
  customElements.define('breeze-tooltip', BreezeTooltip);
}
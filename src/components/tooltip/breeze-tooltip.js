import { customElement } from "../../util/decorators";
import shared from "../shared/shared.css?inline";
import css from "./breeze-tooltip.css?inline";

@customElement('breeze-tooltip')
export default class BreezeTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.defer = (window.requestIdleCallback || requestAnimationFrame).bind(
      window,
    );
    window.addEventListener("scroll", this.setPositionOnScroll.bind(this));
  }

  /**
   * @returns {HTMLElement}
   */
  get target() {
    /**
     * If slot attribute is present, target should be the custom element that owns the slot
     */
    if (this.hasAttribute('slot')) {
      const host = this.assignedSlot.getRootNode().host;
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
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <div part="content" class="content">
        ${this.getAttribute('text') ?? this.innerHTML}
      </div>
    `;
    this.tooltipContent.addEventListener("transitionend", () => {
      if (this.tooltipContent.classList.contains("visible")) {
        this.ariaExpanded = "true";
      } else {
        this.ariaExpanded = "false";
      }
    });
    
    if (this.target) {
      this.target?.addEventListener('focusin', this.openTooltip);
      this.target?.addEventListener('focusout', this.closeTooltip);
    }
  }

  get opened() {
    return this.classList.contains('visible');
  }

  get tooltipContent() {
    return this.shadowRoot.querySelector(".content");
  }

  get tooltipContentWidth() {
    return this.tooltipContent.getBoundingClientRect().width;
  }

  get tooltipContentHeight() {
    return this.tooltipContent.getBoundingClientRect().height;
  }

  closeTooltip = () => {
    this.classList.remove("visible");
  }

  openTooltip = () => {
    this.setPosition();
    this.classList.add("visible");
  }

  get targetWidth() {
    return this.target?.getBoundingClientRect().width;
  }

  setPosition() {
    const { left, top } = this.target.getBoundingClientRect();
    const y = top - this.tooltipContentHeight - 2;
    const x = left + this.targetWidth / 2 - this.tooltipContentWidth / 2;
    console.log(x, this.targetWidth, this.tooltipContentWidth);
    this.style.setProperty("--tooltip-left", `${x}px`);
    this.style.setProperty("--tooltip-top", `${y}px`);
  }

  setPositionOnScroll() {
    if (this.ariaExpanded === "false") return;
    this.setPosition();
  }
}
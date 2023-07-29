// @ts-check
export default class BreezeTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.defer = (window.requestIdleCallback || requestAnimationFrame).bind(
      window,
    );
    window.addEventListener("scroll", this.setPositionOnScroll.bind(this));
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${this.constructor.css}</style>
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
    this.target = this.closest('[breeze-tooltip-target]');
    if (this.target) {
      this.target?.addEventListener('focusin', this.openTooltip);
      this.target?.addEventListener('focusout', this.closeTooltip);
    }
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

  static get css() {
    return `
      :host {
        display: inline-flex;
        --tooltip-arrow-size: 12px;
        position: absolute;
        left: var(--tooltip-left);
        top: calc(var(--tooltip-top) - var(--tooltip-arrow-size));
        transition: opacity .3s ease;
        will-change: opacity;
        z-index: 99999;
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }

      :host(.visible) {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
      }

      .content {
        background-color: var(--tooltip-background-color, #333);
        border-radius: 4px;
        padding: 1em 1.2em;
        width: max(25em, 350px);
        display: grid;
        gap: .75em;
      }

      .content * {
        color: inherit;
        margin: 0;
      }

      .content::before {
        content: '';
        position: absolute;
        bottom: calc(var(--tooltip-arrow-size) * -0.5);
        left: 0;
        border-width: 8px 8px 0;
        border-top-color: initial;
        width: var(--tooltip-arrow-size);
        height: var(--tooltip-arrow-size);
        background: var(--tooltip-background-color, #333);
        transform: rotate(45deg);
        left: calc(50% - var(--tooltip-arrow-size) / 2);
      }
    `;
  }
}

customElements.define("breeze-tooltip", BreezeTooltip);

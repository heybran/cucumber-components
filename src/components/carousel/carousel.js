// @ts-check
import css from "./carousel.css?inline";
import html from "./carousel.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberCarousel extends BaseElement {
  /**
   * @returns {number}
   */
  get itemsPerView() {
    let result = 3;
    if (this.getAttribute('items-per-view')) {
      // @ts-ignore
      result = Number(this.getAttribute('items-per-view'));
    }

    return result;
  }

  connectedCallback() {
    super.render(html, css);
    // @ts-ignore
    this.carouselContainer = this.shadowRoot.querySelector('[part="carousel-container"]');
    // @ts-ignore
    this.pagination = this.shadowRoot.querySelector('[part="pagination"]');
    // @ts-ignore
    this.navigationButtons = this.shadowRoot?.querySelectorAll('[part="navigation-button"]');

    if (!this.hasAttribute('aria-label')) {
      this.setAttribute('aria-label', 'Carousel');
    }
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'region');
    }

    this.carouselItems = this.querySelectorAll('cc-carousel-item');
    if (this.carouselItems.length > 0 && this.hasAttribute('pagination')) {
      this.renderPaginationButtons();
    }
    
    this.defer(() => {
			const id = `carousel-container-${this.uuid()}`;
			// @ts-ignore
			this.carouselContainer.id = id;
			this.pagination?.setAttribute('aria-controls', id);
      this.navigationButtons?.forEach(button => button.setAttribute('aria-controls', id));
		});
    
  }

  /**
   * Render pagination buttons based on how many carousel items it has
   * @returns void
   */
  renderPaginationButtons() {
    // @ts-ignore
    const _count = Math.ceil(this.carouselItems.length / this.itemsPerView);
    // @ts-ignore
    for (let i = 0; i < _count; i++) {
      const button = document.createElement('button');
      button.setAttribute('role', 'tab');
      button.setAttribute('part', 'pagination-button');
      button.setAttribute('aria-label', `Go to slide ${i+1} of ${_count}`);
      if (i === 0) {
        button.setAttribute('aria-selected', 'true');
        button.setAttribute('tabindex', '0');
      } else {
        button.setAttribute('aria-selected', 'false');
        button.setAttribute('tabindex', '-1');
      }
      // @ts-ignore
      this.pagination.appendChild(button);
    }
  }

  /**
   * @returns void
   */
  showPreviousSlide() {
  }

  /**
   * @returns void
   */
  showNextSlide() {
    // 1. Decrease scroll left
    const carouselItemWidth = this.carouselItems[0].clientWidth;
    const carouselItemCount = this.carouselItems?.length;
    const gap = Number(window.getComputedStyle(this)
      .getPropertyValue('--spacing')
      .replace('px', '').trim());
    const itemsPerView = 3; // TODO: get it from attribute
    this.carouselContainer.scrollLeft += (carouselItemWidth + gap) * itemsPerView;
    // 2. Update pagination
    // 3. If loop, go to last slide
  }
}

customElements.define('cc-carousel', CucumberCarousel);

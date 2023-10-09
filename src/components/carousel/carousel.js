// @ts-check
import css from "./carousel.css?inline";
import html from "./carousel.html?raw";
import BaseElement from "../../shared/base-element.js";

export default class CucumberCarousel extends BaseElement {
  /**
   * @returns number
   */
  get itemsPerView() {
    let result = 3;
    if (this.getAttribute('items-per-view')) {
      // @ts-ignore
      result = Number(this.getAttribute('items-per-view'));
    }

    return result;
  }

  /**
   * @returns number
   */
  get totalSlides() {
    return Math.ceil(this.carouselItems.length / this.itemsPerView);
  }

  connectedCallback() {
    super.render(html, css);
    // @ts-ignore
    this.carouselContainer = this.shadowRoot.querySelector('[part="carousel-container"]');
    // @ts-ignore
    this.pagination = this.shadowRoot.querySelector('[part="pagination"]');
    // @ts-ignore
    this.navigationButtons = this.shadowRoot.querySelectorAll('[part="navigation-button"]');

    this.style.setProperty('--items-per-view', this.itemsPerView);
    /**
     * Default to start with first slide.
     */
    this.activeSlide = 1;

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
    for (let i = 0; i < this.totalSlides; i++) {
      const button = document.createElement('button');
      button.setAttribute('role', 'tab');
      button.setAttribute('part', 'pagination-button');
      button.setAttribute('aria-label', `Go to slide ${i+1} of ${this.totalSlides}`);
      if (i === 0) {
        button.setAttribute('aria-selected', 'true');
        button.setAttribute('tabindex', '0');
      } else {
        button.setAttribute('aria-selected', 'false');
        button.setAttribute('tabindex', '-1');
      }
      /**
       * Setting an inline click handler works pretty good here,
       * since we're inside a for loop already,
       * downside is that this part 'this.getRootNode().host' doesn't look quite elegant.
       */
      button.setAttribute('onclick', `this.getRootNode().host.showSlide(${i+1})`);
      // @ts-ignore
      this.pagination.appendChild(button);
    }
  }

  /**
   * @returns void
   */
  showPreviousSlide() {
    // @ts-ignore
    this.showSlide(this.activeSlide - 1);
  }

  
  /**
   * @returns void
  */
  showNextSlide() {
    // @ts-ignore
    this.showSlide(this.activeSlide + 1);
  }

  /**
   * Go to slide by given slide index.
   * @param {number} slideIndex 
   * @returns void
   */
  showSlide(slideIndex) {
    // @ts-ignore
    const carouselItemWidth = this.carouselItems[0].clientWidth;
    const gap = Number(window.getComputedStyle(this)
      .getPropertyValue('--spacing')
      .replace('px', '').trim());

    /**
     * Adding fixes for skipping specific slide, e.g. from slide 1 to slide 3,
     * via clicking pagination button with mouse.
     */
    const scrollDistance = ((carouselItemWidth + gap) * this.itemsPerView) * Math.abs(slideIndex - this.activeSlide);
    // @ts-ignore
    if (slideIndex > this.activeSlide) {
      // @ts-ignore
      this.carouselContainer.scrollLeft += scrollDistance;
    } else {
      // @ts-ignore
      this.carouselContainer.scrollLeft -= ScreenOrientation;
    }

    this.updatePaginationButtonsStatus(slideIndex);

    this.activeSlide = slideIndex;

    if (!this.hasAttribute('loop')) {
      if (this.activeSlide === this.totalSlides) {
        this.disableNextButton();
      } else if (this.activeSlide === 1) {
        this.disablePreviousButton();
      }
    }
  }

  /**
   * Update pagination buttons status by given slide index
   * @param {number} slideIndex 
   */
  updatePaginationButtonsStatus(slideIndex) {
    const currentButton = this.shadowRoot?.querySelector('[role="tab"][aria-selected="true"]');
    // @ts-ignore
    const buttonToUpdated = Array.from(this.pagination.children).find((_, index) => {
      return index + 1 === slideIndex;
    });

    // @ts-ignore
    currentButton.setAttribute('aria-selected', 'false');
    // @ts-ignore
    currentButton.setAttribute('tabindex', '-1');
    buttonToUpdated?.setAttribute('aria-selected', 'true');
    buttonToUpdated?.setAttribute('tabindex', '0');
  }

  disablePreviousButton() {
    this.disableNavigationButton('previous');
  }

  disableNextButton() {
    this.disableNavigationButton('next');
  }

  /**
   * Enable existing disabled navigation button, if any
   * @returns this
   */
  enableCurrentDisabledButton() {
    // @ts-ignore
    const currentDisabledButton = this.shadowRoot.querySelector('[part="navigation-button"][disabled]');
    if (currentDisabledButton) {
      currentDisabledButton.removeAttribute('disabled');
      currentDisabledButton.setAttribute('aria-disabled', 'false');
    }
    return this;
  }

  /**
   * Disable navigation button by given index
   * @param {'previous'|'next'} type
   * @returns this
   */
  disableNavigationButton(type) {
    this.enableCurrentDisabledButton()
    const index = type === 'previous' ? 1 : 2;
    // @ts-ignore
    const button = this.shadowRoot.querySelector(`[part="navigation-button"]:nth-child(${index})`);
    // @ts-ignore
    button.setAttribute('disabled', '');
    // @ts-ignore
    button.setAttribute('aria-disabled', 'true');
    return this;
  }
}

customElements.define('cc-carousel', CucumberCarousel);

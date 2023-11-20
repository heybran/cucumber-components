// @ts-check
export default class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render(html, css, sharedCss) {
    const sharedSheet = new CSSStyleSheet();
    sharedSheet.replaceSync(sharedCss);
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    // @ts-ignore
    this.shadowRoot.adoptedStyleSheets = [sharedSheet, sheet];
    // @ts-ignore
    this.shadowRoot.innerHTML = html;
  }

  /**
   * @param {IdleRequestCallback} callback 
   * @returns {void}
   */
  defer(callback) {
    const _defer = window.requestIdleCallback || requestAnimationFrame;
    _defer(callback);
  }

  /**
   * @returns {string}
   */
  uuid() {
    return Math.random().toString(36).substring(2, 8);
  }

  /**
   * @returns {HTMLElement}
   */
  get container() {
    // @ts-ignore
    return this.shadowRoot.querySelector('[part="container"]');
  }

  /**
   * Query for the default slot element.
   * @returns {HTMLSlotElement}
   */
  get defaultSlot() {
    // @ts-ignore
    return this.shadowRoot.querySelector('slot:not([name])');
  }
}

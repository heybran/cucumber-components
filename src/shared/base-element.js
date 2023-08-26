// @ts-check
export default class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render(html, css) {
    const template = document.createElement('template');
    template.innerHTML = `<style>${css}</style>` + html;
    // @ts-ignore
    this.shadowRoot.appendChild(template.content.cloneNode(true));
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
}

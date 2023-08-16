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
   * @returns {HTMLElement}
   */
  get container() {
    // @ts-ignore
    return this.shadowRoot.querySelector('[part="container"]');
  }
}

// @ts-check
import css from "./spinner.css?inline";

export default class BreezeSpinner extends HTMLElement {
  static is = 'breeze-spinner';
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // @ts-ignore
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div part="spinner" role="progressbar" aria-label="Loading"></div>
    `;
  }
}

if (!customElements.get('breeze-spinner')) {
  customElements.define('breeze-spinner', BreezeSpinner);
}

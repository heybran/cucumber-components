// @ts-check
import css from "./breeze-spinner.css?inline";

export default class BreezeSpinner extends HTMLElement {
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

customElements.define('breeze-spinner', BreezeSpinner);
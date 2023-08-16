// @ts-check
import shared from "../../shared/shared.css?inline";
import css from "./button.css?inline";
import html from "./button.html?raw";

const template = document.createElement('template');
template.innerHTML = `<style>${shared}${css}</style>${html}`;

export default class BreezeButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // @ts-ignore
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

if (!customElements.get('breeze-button')) {
  customElements.define('breeze-button', BreezeButton);
}
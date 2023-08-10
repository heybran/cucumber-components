// @ts-check
import { customElement } from "../../util/decorators";
import shared from "../shared/shared.css?inline";
import css from "./breeze-button.css?inline";

@customElement('breeze-button')
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
    this.shadowRoot.innerHTML = `
      <style>${shared}${css}</style>
      <button>
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </button>
      <slot name="tooltip"></slot>
    `;
  }
}
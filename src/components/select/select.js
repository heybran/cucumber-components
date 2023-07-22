import BreezeBaseElement from "../base/base.js";

export default class Select extends BreezeBaseElement {
  constructor() {
    super();
  }

  get markup() {
    return `
      <button>${this.value}</button>
    `;
  }

  get css() {
    return `
      :host {
        display: inline-flex;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get value() {
    return this._value;
  }

  set value(aValue) {
    return this._value = aValue;
  }

  get items() {
    return this._items();
  }

  set items(dataArray) {
    this._items = dataArray;
  }
}

customElements.define('breeze-select', Select);
import css from "./visually-hidden.css?inline";

class CucumberVisuallyHidden extends HTMLElement {
  static tagName = 'cc-visually-hidden';

  connectedCallback() {
    if (!('replaceSync' in CSSStyleSheet.prototype) || this.shadowRoot) {
      return;
    }
    const root = this.attachShadow({ mode: "open" });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    // @ts-ignore
    root.adoptedStyleSheets = [sheet];
    // @ts-ignore
    root.innerHTML = '<slot></slot>';
  }
}

if ("customElements" in window) {
  customElements.define(CucumberVisuallyHidden.tagName, CucumberVisuallyHidden);
}
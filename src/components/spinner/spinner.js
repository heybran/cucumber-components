import style from "./spinner.css?inline";

export default class CucumberSpinner extends HTMLElement {  
  static tagName = 'cc-spinner';

  connectedCallback() {
    if (!("replaceSync" in CSSStyleSheet.prototype) || this.shadowRoot) {
			return;
		}

    const shadowroot = this.attachShadow({ mode: "open" });
    const sheet = new CSSStyleSheet();
		sheet.replaceSync(style);
		shadowroot.adoptedStyleSheets = [sheet];
    let template = document.createElement("template");
    template.innerHTML = `<div part="spinner" role="progressbar" aria-label="Loading"></div>`;
    shadowroot.appendChild(template.content.cloneNode(true));
  }
}

if ("customElements" in window) {
	customElements.define(CucumberSpinner.tagName, CucumberSpinner);
}
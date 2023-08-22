import icons from "../../icons/icons.js";
import BaseElement from "../../shared/base-element.js";
import html from "./icon.html?raw";
import css from "./icon.css?inline";

export default class BreezeIcon extends BaseElement {
	connectedCallback() {
		super.render(html, css);
    // @ts-ignore
    this.shadowRoot.querySelector('svg').innerHTML = icons[this.getAttribute('icon')]
		if (this.hasAttribute("label")) {
			// @ts-ignore
			this.setAttribute("aria-label", this.getAttribute("label"));
		}
	}
}

if (!customElements.get("breeze-icon")) {
	customElements.define("breeze-icon", BreezeIcon);
}

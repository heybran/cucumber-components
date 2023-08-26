import FormElement from "../../shared/form-element.js";
import css from "./button.css?inline";
import html from "./button.html?raw";

export default class BreezeButton extends FormElement {
	get type() {
		return this.getAttribute("type");
	}

	connectedCallback() {
		super.render(html, css);
		this._connected = true;
		this.loading = this.hasAttribute("loading");
		this.disabled = this.hasAttribute("disabled");
		if (this.type) {
			this.button.setAttribute("type", this.type);
			this.handleButtonClick(this.type);
		}
	}

	/**
	 *
	 * @param {string} type
	 */
	handleButtonClick(type) {
		if (!["submit", "reset"].includes(type)) {
			return;
		}

		const form = this.getForm();

		if (!form) {
			return console.warn(
				`breeze-button has type ${type} but no associated form is found`,
			);
		}

		this.button.addEventListener("click", (event) => {
			// FIXME: form got submitted twice
			// form.dispatchEvent(new Event(type, { cancelable: true }));
			// form.dispatchEvent(new SubmitEvent('submit', {
			// 	bubbles: true,
			// 	cancelable: true
			// }));
			const fakeButton = document.createElement('button');
			fakeButton.setAttribute('type', type);
			fakeButton.style.position = 'absolute';
			form.appendChild(fakeButton);
			fakeButton.click();
			fakeButton.remove();
		});
	}

	/**
	 * @returns {HTMLButtonElement}
	 */
	get button() {
		// @ts-ignore
		return this.shadowRoot.querySelector("button");
	}

	render() {
		// @ts-ignore
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	static get observedAttributes() {
		return ["type", "loading", "disabled"];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		/**
		 * BUG: from <breeze-button></breeze-button> to
		 * <breeze-button disabled></breeze-button> oldValue is null
		 */
		if (null === oldValue && !this._connected) {
			return;
		}

		if (attr === "type") {
			this.button.setAttribute(attr, newValue);
		} else if (attr === "loading") {
			this.loading = this.hasAttribute("loading");
		} else if (attr === "disabled") {
			this.disabled = this.hasAttribute("disabled");
		}
	}

	/**
	 * @returns {boolean}
	 */
	get loading() {
		return this.hasAttribute("loading");
	}

	set loading(flag) {
		if (flag) {
			import("../spinner/spinner.js").then(({ default: BreezeSpinner }) => {
				const spinner = document.createElement(BreezeSpinner.is);
				spinner.setAttribute("part", "spinner");
				this.button.append(spinner);
				this.button.setAttribute("aria-busy", "true");
			});
		} else {
			this.button.querySelector('[part="spinner"]')?.remove();
			this.button.removeAttribute("aria-busy");
		}
	}

	/**
	 * @returns {boolean}
	 */
	get disabled() {
		return this.hasAttribute("disabled");
	}

	set disabled(flag) {
		if (flag) {
			this.button.setAttribute("disabled", "");
			this.button.setAttribute("aria-disabled", "true");
		} else {
			this.button.removeAttribute("disabled");
			this.button.setAttribute("aria-disabled", "false");
		}
	}
}

if (!customElements.get("breeze-button")) {
	customElements.define("breeze-button", BreezeButton);
}

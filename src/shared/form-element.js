// @ts-check
import BaseElement from "./base-element.js";

export default class FormElement extends BaseElement {
  constructor() {
    super();
    this.attributesDefined = [];
  }

  /**
   * @returns {HTMLInputElement}
   */
  get input() {
    // @ts-ignore
    return this.shadowRoot.querySelector('input');
  }

  /**
   * @returns {HTMLTextAreaElement}
   */
  get textarea() {
    // @ts-ignore
    return this.shadowRoot.querySelector('textarea');
  }

  /**
   * @returns {HTMLInputElement|HTMLTextAreaElement}
   */
  get reflectTarget() {
    if (this.textarea) {
      return this.textarea;
    }

    return this.input;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this.reflectTarget.value;
  }

  getForm() {
    /** @type {HTMLFormElement|null} */
    let result = this.closest('form');
    while (result) {
      if (result instanceof HTMLFormElement) {
        return result;
      }
      result = result.getRootNode().host;
    }
    return null;
  }

  /**
   * 
   * @returns {boolean}
   */
  // isValid() {
  //   // @ts-ignore
	// 	return this.input.checkValidity();
	// }

  /**
   * In case users want to call this method as well.
   * @returns {boolean}
   */
  // checkVisibility() {
  //   // @ts-ignore
  //   return this.input.checkValidity();
  // }

  /**
	 * @param {FormDataEvent} event
	 * @returns void
	 */
	setFormData = (event) => {
		const formData = event.formData;
		if (!this.hasAttribute("name")) {
			return console.warn(
				`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`,
			);
		}

    /**
     * When a form is submitted, only checkboxes which are currently checked 
     * are submitted to the server, and the reported value is the value of the value attribute.
     */
    if (this.input?.type === 'checkbox' && !this.hasAttribute('checked')) {
      return;
    }

		/**
		 * Fixes for not able to remove formdata event listener when disconnected
		 */
		if (!this.getForm()) {
			return;
		}

    if (this.value) {
      // @ts-ignore
      formData.set(this.getAttribute("name"), this.value);
    }
	}

  /**
	 * 
	 * @param {string} attr 
	 * @param {string|null} oldValue 
	 * @param {string|null} newValue 
	 */
  attributeChangedCallback(attr, oldValue, newValue, FORM_FIELD) {
		const attrSource = FORM_FIELD[attr];
		if (!this.attributesDefined.includes(attr)) {
			Object.defineProperty(this, attr, {
				get() {
					if (attrSource.type === Boolean) {
						return this.hasAttribute(attr);
					} else if (attrSource.type === String) {
						/**
						 * If 'value' is set on host, we define a getter/setter,
						 * if 'value' is not present, this.value works too as we've defined a getter
						 * at parent class FromElement.
						 */
						if (attr === 'value') {
							/**
							 * Getting value from either input/textarea element,
							 * otherwise we will need to listen for input event on input/textarea element,
							 * and sync the attribue to host.
							 */
							return this.reflectTarget.value;
						}
						return this.getAttribute(attr) ?? '';
					}
				},
				set(arg) {
					if (attrSource.type === Boolean) {
						this.toggleAttribute(attr, Boolean(arg));
					} else if (attrSource.type === String) {
						this.setAttribute(attr, arg);
					}
				}
			});

			this.attributesDefined.push(attr);
		}

		if (attrSource.reflect) {
			if (attrSource.type === String) {
				this.reflectTarget.setAttribute(attr, newValue);
			} else if (attrSource.type === Boolean) {
				this.reflectTarget.toggleAttribute(attr, this.hasAttribute(attr));
			}
		}

		/**
		 * If 'label' attribute is changed,
		 * assuming we have an onLabelChange method, we call this method, 
		 * pass along newValue into this method, optionally.
		 */
		let attrConverted = attr.charAt(0).toUpperCase() + attr.slice(1);
		if (attr.includes('-')) {
			const convertedName = attr.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
			attrConverted = convertedName.charAt(0).toUpperCase() + convertedName.slice(1);
		}
		const methodNameNeeded = `on${attrConverted}Change`;

		if (typeof this[methodNameNeeded] === 'function') {
			this[methodNameNeeded](newValue);
		}
  }
}

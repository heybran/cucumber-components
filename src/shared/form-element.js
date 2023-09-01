// @ts-check
import BaseElement from "./base-element.js";

const attrs = {
  password: {
    required: Boolean,
    pattern: String,
    minlength: Number,
    maxlength: Number,
  }
}

export default class FormElement extends BaseElement {
  /**
   * @returns {HTMLInputElement}
   */
  get input() {
    // @ts-ignore
    return this.shadowRoot.querySelector('input');
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
	};
}

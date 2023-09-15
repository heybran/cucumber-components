/**
 * @typedef {Object} FormFieldProperty
 * @property {BooleanConstructor|StringConstructor} type - type of this property, e.g. typeof this.required
 * @property {Boolean} reflect - Changing this property also reflect changes on attribute og input
 * 
 */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 * The HTML autocomplete attribute lets web developers specify 
 * what if any permission the user agent has to provide automated assistance 
 * in filling out form field values, as well as guidance to the browser 
 * as to the type of information expected in the field.
 * 
 * It is available on <input> elements that take a text or numeric value as input, 
 * <textarea> elements, <select> elements, and <form> elements.
 * 
 * @type {FormFieldProperty}
 */
const autocomplete = {
  type: String,
  reflect: true,
}

const label = {
  type: String,
  reflect: false,
}

const placeholder = {
  type: String,
  reflect: true,
}

const value = {
  type: String,
  reflect: true,
}

const required = {
  type: Boolean,
  reflect: true,
}

const helperText = {
  type: String,
  reflect: false,
}

const errorMessage = {
  type: String,
  reflect: false,
}

export const EMAIL_FIELD = {
  autocomplete,
  label,
  'helper-text': helperText,
  required,
  placeholder,
  value,
  'error-message': errorMessage,
}
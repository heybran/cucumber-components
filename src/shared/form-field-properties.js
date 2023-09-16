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

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly
 * If the readonly attribute is specified on an input element, 
 * because the user can not edit the input, 
 * the element does not participate in constraint validation.
 * 
 * When an input has the readonly attribute, 
 * the :read-only pseudo-class also applies to it. 
 * Conversely, inputs that support the readonly attribute 
 * but don't have the attribute set match the :read-write pseudo-class.
 * 
 * The difference between disabled and readonly is that read-only controls 
 * can still function and are still focusable, 
 * whereas disabled controls can not receive focus and 
 * are not submitted with the form and generally do not function 
 * as controls until they are enabled.
 * 
 * Because a read-only field cannot have its value changed by a user interaction, 
 * required does not have any effect on inputs with the readonly attribute also specified.
 */
const readonly = {
  type: Boolean,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
 */
const disabled = {
  type: Boolean,
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
  readonly,
  disabled,
  placeholder,
  value,
  'error-message': errorMessage,
}
/**
 * @typedef {Object} FormFieldProperty
 * @property {BooleanConstructor|StringConstructor} type - type of this property, e.g. typeof this.required
 * @property {Boolean} reflect - Changing this property also reflect changes on attribute og input
 * 
 */

const name = {
  type: String,
  reflect: true,
}

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
 * Apply to all input elements.
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

const multiple = {
  type: Boolean,
  reflect: true,
}

const pattern = {
  type: String,
  reflect: true,
}

const helperText = {
  type: String,
  reflect: false,
}

/**
 * Prefix text is being used on URL field, e.g. https://
 */
const prefixText = {
  type: String,
  reflect: false,
}

const errorMessage = {
  type: String,
  reflect: false,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/dirname
 * The dirname attribute can be used on any <textarea> element, 
 * or any <input> element with text, search, tel, url, or email type.
 */
const dirname = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#list
 * The value given to the list attribute should be the id of a <datalist> element 
 * located in the same document. The <datalist> provides a list of predefined values to 
 * suggest to the user for this input. 
 * Any values in the list that are not compatible with the type are 
 * not included in the suggested options. The values provided are suggestions, not requirements: 
 * users can select from this predefined list or provide a different value.
 * 
 * It is valid on text, search, url, tel, email, date, month, week, time, datetime-local, number, range, and color.
 * 
 * Per the specifications, the list attribute is not supported by the 
 * hidden, password, checkbox, radio, file, or any of the button types.
 * 
 * Depending on the browser, the user may see a custom color palette suggested, 
 * tic marks along a range, or even an input that opens like a <select> but allows for non-listed values. 
 * Check out the browser compatibility table for the other input types.
 */
const list = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
 * Tt defines the minimum string length (measured in UTF-16 code units) that 
 * the user can enter into the entry field. 
 * This must be a non-negative integer value smaller than or 
 * equal to the value specified by maxlength. If no minlength is specified, 
 * or an invalid value is specified, the input has no minimum length.
 */
const minlength = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
 * It defines the maximum string length (measured in UTF-16 code units) that 
 * the user can enter into the field. This must be an integer value of 0 or higher. 
 * If no maxlength is specified, or an invalid value is specified, 
 * the field has no maximum length. This value must also be greater than or 
 * equal to the value of minlength.
 */
const maxlength = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#size
 * Valid for text, search, url, tel, email, password fields.
 * Basically creates same result as setting CSS width property with a few specialities. 
 * The actual unit of the value depends on the input type. 
 * For password and text, it is a number of characters (or em units) with a default value of 20, 
 * and for others, it is pixels (or px units). CSS width takes precedence over the size attribute.
 * 
 * @todo Do we really need to support this attr?
 */
const size = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search#search_form_labels_and_accessibility
 * @example <cc-search-field accessible-label="Search through site content"></cc-search-field>
 */
const accessibleLabel = {
  type: String,
  reflect: true,
  reflectAs: 'aria-label',
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min
 * It is valid for the input types including: 
 * date, month, week, time, datetime-local, number and range types, and the <meter> element.
 */
const min = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max
 * Valid for the numeric input types, including the 
 * date, month, week, time, datetime-local, number and range types, 
 * and both the <progress> and <meter> elements, 
 * the max attribute is a number that specifies the most positive value a form control 
 * to be considered valid.
 */
const max = {
  type: String,
  reflect: true,
}

/**
 * 
 */
const step = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
 * The accept attribute value is a string that defines the file types the file input should accept. 
 * This string is a comma-separated list of unique file type specifiers. 
 * Because a given file type may be identified in more than one manner, 
 * it's useful to provide a thorough set of type specifiers when you need files of a given format.
 */
const accept = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture
 * The capture attribute specifies that, optionally, a new file should be captured, 
 * and which device should be used to capture that new media of a type defined by the accept attribute.
 * 
 * Note these work better on mobile devices; 
 * if your device is a desktop computer, you'll likely get a typical file picker.
 */
const capture = {
  type: String,
  reflect: true,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#rows
 * The number of visible text lines for the control. 
 * If it is specified, it must be a positive integer. 
 * If it is not specified, the default value is 2.
 */
const rows = {
  type: String,
  reflect: true,
}

export const TEXT_FIELD = {
  name,
  label,
  'helper-text': helperText,
  required,
  pattern,
  readonly,
  disabled,
  placeholder,
  value,
  'error-message': errorMessage,
  list,
  minlength,
  maxlength,
  /**
   * @todo
   */
  dirname,
}

export const EMAIL_FIELD = {
  name,
  autocomplete,
  label,
  'helper-text': helperText,
  required,
  multiple,
  pattern,
  readonly,
  disabled,
  placeholder,
  value,
  'error-message': errorMessage,
  list,
  /**
   * @todo - Add these docs to email field
   */
  dirname,
}

export const URL_FIELD = {
  name,
  autocomplete,
  label,
  'helper-text': helperText,
  required,
  multiple,
  pattern,
  readonly,
  disabled,
  placeholder,
  value,
  'error-message': errorMessage,
  list,
  /**
   * @todo - Add these docs to email field
   */
  dirname,
  'prefix-text': prefixText,
}

export const SEARCH_FIELD = {
  name,
  'helper-text': helperText,
  disabled,
  list,
  minlength,
  maxlength,
  pattern,
  placeholder,
  readonly,
  required,
  size,
  value,
  'accessible-label': accessibleLabel,
}

export const SELECT_FIELD = {
  name,
  label,
  /**
   * When placeholder is present but label is not,
   * Need to add a hidden label that match the placeholder so it can be accessible
   */
  placeholder,
  'helper-text': helperText,
  disabled,
  multiple,
}

export const DATE_PICKER = {
  value,
  label,
  name,
  'helper-text': helperText,
  min,
  max,
  step,
  required,
}

export const FILE_UPLOAD = {
  label,
  name,
  'helper-text': helperText,
  accept,
  multiple,
  required,
}

export const TEXTAREA = {
  label,
  'helper-text': helperText,
  rows,
  placeholder,
  disabled,
  required,
  readonly,
  name,
  minlength,
  maxlength,
}
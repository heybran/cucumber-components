// @ts-check
import { defer, camelToKebab } from "./helper.js";
/**
 * @typedef {boolean|number|string} PropertyValueType
 */

/**
 * @typedef {BooleanConstructor|StringConstructor|NumberConstructor} PropertyType
 */

/**
 * 
 * @param {string} name 
 */
export function customElement(name) {
  return (_value, { addInitializer }) => {
    addInitializer(function() {
      customElements.define(name, this);
    });
  }
}

/**
 * @param {{ type: PropertyType }} options
 */
export function property({ type }) {
  /**
   * @param {undefined} _value
   * @param {{ kind: string, name: string | symbol }} options
   */
  return function(_value, { kind, name }) {
    name = camelToKebab(String(name));
    if (kind !== 'field') return;
    /**
     * @param {PropertyValueType} initialValue 
     * @returns {PropertyValueType}
     */
    return function(initialValue) {
      initialValue = this.getAttribute(name);

      defer(() => {
        Object.defineProperty(this, name, {
          get() {
            if (type === Boolean) {
              return this.hasAttribute(name);
            } else if (type === String) {
              return this.getAttribute(name) ?? '';
            }
          },
          set(value) {
            if (type === Boolean) {
              this.toggleAttribute(name, Boolean(value));
            } else if (type === String) {
              this.setAttribute(name, value);
            }
          },
          configurable: true,
          enumerable: true,
        });
      });

      return initialValue ?? '';
    }
  }
}
// @ts-check
import { defer, camelToKebab, isCustomElement } from "./helper.js";
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
 * @param {{ type: PropertyType, selector: string }} options
 */
export function property({ type, selector }) {
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
      if (type === Boolean) {  
        initialValue = this.hasAttribute(name);
      } else if (type === String) {  
        initialValue = this.getAttribute(name) ?? '';
      }

      customElements.whenDefined(this.constructor.is).then(() => {
        Object.defineProperty(this, name, {
          async get() {
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

      return initialValue;
    }
  }
}

/**
 * @param {{ type: HTMLElement, selector: string }} options
 */
export function query({ type, selector }) {
  /**
   * @param {undefined} _value
   * @param {{ kind: string, name: string | symbol }} options
   */
  return function(_value, { kind, name }) {
    if (kind !== 'field') return;
    /**
     * @param {PropertyValueType} initialValue 
     * @returns {HTMLElement}
     */
    return function(initialValue) {
      if (type === HTMLElement) {
        const element = this.querySelector(selector);
 
          initialValue = element;
          // customElements.whenDefined(element.localName);
      }

      return initialValue;
    }
  }
}
/** @param {() => void} callback */
export function defer(callback) {
  setTimeout(() => callback(), 0);
} 

/** 
 * @param {string} camelCaseString
 * @returns {string} 
 */
export function camelToKebab(camelCaseString) {
  return camelCaseString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/** @param {HTMLElement} element */
export function isCustomElement(element) {
  return element instanceof HTMLElement && element.tagName.includes('-');
}
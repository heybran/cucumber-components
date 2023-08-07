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
/**
 * @typedef {Object} CSSStyleObject
 * @description 对象形式的CSS样式，属性名可以是任何有效的CSS属性，属性值为相应的CSS值。
 * @property {string} [propertyName] - CSS属性名，值为对应的CSS属性值。此处只是示例，实际上应包含所有可能的CSS属性。
 */
/**
 * @param {CSSStyleObject} styleObj
 */
export default function styleMap(styleObj) {
  const keys = Object.keys(styleObj);
  let ans = "";
  for (let i = 0; i < keys.length; i++) {
    ans += `${camelCaseToKebabCase(keys[i])}: ${camelCaseToKebabCase(styleObj[keys[i]])};`;
  }
  return ans;
}

/**
 * 将小驼峰命名的字符串转换为短横线隔开的形式。
 *
 * @param {string} camelCaseStr - 小驼峰命名的字符串。
 * @returns {string} 转换后的短横线隔开的字符串。
 */
function camelCaseToKebabCase(camelCaseStr) {
  return camelCaseStr.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

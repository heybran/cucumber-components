
const isNumber = (value) => typeof value === 'number';
const isString = (value) => typeof value === 'string';

/**
 * @description convert a value to a number
 * @param value value to convert
 * @param defaultValue default value to return if the value is not a number
 * @returns {number} the value as a number
 */
export default function toNumber(value, defaultValue= NaN) {
  let ans = defaultValue;
  if (isNumber(value) && !Number.isNaN(value)) {
    ans = value;
  } else if (isString(value) && !Number.isNaN(parseFloat(value))) {
    ans = parseFloat(value);
  }
  return ans;
};


/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-').map((item, i) => i == 0 ? item : item.slice(0, 1).toUpperCase() + item.slice(1)).join('')
}

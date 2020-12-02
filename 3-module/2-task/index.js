/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  if (a > b) {
    return arr.filter(item => item >= b && item <= a)
  } else return arr.filter(item => item >= a && item <= b)
}

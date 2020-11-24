/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  while (n >= 2) {
    result *= n;
    n--;
  }
  return result;

  /*==== решение с циклом for ====
  
  let result = 1;

  if (n < 2) {
    return result;
  } else {
    for (let i = 2; i <= n; n++) {
      result *= n;
    }
    return result;
  }
  */
}

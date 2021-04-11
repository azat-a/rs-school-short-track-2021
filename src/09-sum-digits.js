/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numArr = String(n).split('');

  let sum;
  while (numArr.length > 1) {
    sum = numArr.reduce((accum, digit) => accum + Number(digit), 0);
    numArr = String(sum).split('');
    sum = 0;
  }

  return Number(numArr[0]);
}

module.exports = getSumOfDigits;

/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = -1;
  let end = array.length;

  let middle;
  while (end - start > 1) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] < value) {
      start = middle;
    } else {
      end = middle;
    }
  }

  return end;
}

module.exports = findIndex;

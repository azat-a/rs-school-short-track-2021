/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const filteredArray = array.filter((item) => {
    if (item === -1) {
      return false;
    }

    return true;
  });
  filteredArray.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  const outputArray = [];
  let j = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === -1) {
      outputArray.push(-1);
    } else {
      outputArray.push(filteredArray[j]);
      j += 1;
    }
  }

  return outputArray;
}

module.exports = sortByHeight;

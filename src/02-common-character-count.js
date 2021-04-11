/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('');

  function charCounter(char, arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === char) counter += 1;
    }
    return counter;
  }

  let commonCharCounter = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr1[i - 1]) {
      commonCharCounter += Math.min(charCounter(arr1[i], arr1), charCounter(arr1[i], arr2));
    }
  }
  return commonCharCounter;
}

module.exports = getCommonCharacterCount;

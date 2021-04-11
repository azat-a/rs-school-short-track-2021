/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const alphabet = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      alphabet[alphabet.length - 1][1] += 1;
    } else {
      alphabet.push([str[i], 1]);
    }
  }

  let encoded = '';
  /* eslint-disable-next-line */
  for (let i = 0; i < alphabet.length; i += 1) {
    if (alphabet[i][1] === 1) {
      encoded += alphabet[i][0];
    } else {
      encoded += `${alphabet[i][1]}${alphabet[i][0]}`;
    }
  }

  return encoded;
}

module.exports = encodeLine;

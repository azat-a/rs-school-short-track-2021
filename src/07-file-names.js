/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const files = {};
  const output = [];

  for (let i = 0; i < names.length; i += 1) {
    if (names[i] in files) {
      files[names[i]] += 1;
      files[`${names[i]}(${files[names[i]]})`] = 0;
      output.push(`${names[i]}(${files[names[i]]})`);
    } else {
      files[names[i]] = 0;
      output.push(names[i]);
    }
  }
  return output;
}

renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);

module.exports = renameFiles;

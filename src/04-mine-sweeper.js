/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const lastRow = matrix.length - 1;
  const lastCol = matrix[0].length - 1;

  const result = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));

  function mine(row, col) {
    if (row < 0 || col < 0 || row >= lastRow || col >= lastCol) {
      return 0;
    }
    if (!matrix[row][col]) {
      return 0;
    }
    return 1;
  }

  for (let row = 0; row <= lastRow; row += 1) {
    for (let col = 0; col <= lastCol; col += 1) {
      result[row][col] = mine(row - 1, col - 1)
      + mine(row - 1, col)
      + mine(row - 1, col + 1)
      + mine(row, col + 1)
      + mine(row + 1, col + 1)
      + mine(row + 1, col)
      + mine(row + 1, col - 1)
      + mine(row, col - 1);
    }
  }

  return result;
}

module.exports = minesweeper;

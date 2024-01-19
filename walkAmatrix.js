const walkMatrix = (matrix) => {
  const results = [];

  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  let startRow = 0;
  let startCol = 0;
  let endRow = rowCount - 1;
  let endCol = colCount - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let column = startCol; column <= endCol; column++) {
      results.push(matrix[startRow][column]);
    }
    startRow++;

    // right column
    for (let row = startRow; row <= endRow; row++) {
      results.push(matrix[row][endCol]);
    }
    endCol--;

    if (endRow >= startRow) {
      // bottom row
      for (let column = endCol; column >= startCol; column--) {
        results.push(matrix[endRow][column]);
      }
    }
    endRow--;

    if (endCol >= startCol) {
      // left column
      for (let row = endRow; row >= startRow; row--) {
        results.push(matrix[row][startCol]);
      }
    }
    startCol++;
  }

  return results;
};

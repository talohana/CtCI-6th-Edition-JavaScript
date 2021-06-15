const NOT_FOUND = -1;

const sortedMatrixSearch = (matrix, target) => {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return [row, col];
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return [NOT_FOUND, NOT_FOUND];
};

// TESTS

const matrix = [
  [1, 5, 7, 9, 12],
  [5, 8, 9, 10, 13],
  [8, 9, 10, 13, 15],
  [10, 12, 13, 17, 20],
  [12, 14, 25, 28, 30],
];

console.log(sortedMatrixSearch(matrix, 13));
console.log(sortedMatrixSearch(matrix, 8));
console.log(sortedMatrixSearch(matrix, 9));
console.log(sortedMatrixSearch(matrix, 28));
console.log(sortedMatrixSearch(matrix, 50));

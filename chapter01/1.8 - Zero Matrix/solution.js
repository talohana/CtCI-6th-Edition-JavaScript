const isZeroValue = (bitVector, index) => (bitVector & (1 << index)) > 0;

// Time complexity: O(MxN), Space complexity: O(1)
const zeroMatrix = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  let zeroRows = 0;
  let zeroCols = 0;

  // O(MxN)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isZeroValue(zeroRows, i) || isZeroValue(zeroCols, j)) {
        break;
      } else if (mat[i][j] === 0) {
        zeroRows |= 1 << i;
        zeroCols |= 1 << j;
      }
    }
  }

  // O(MxN)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isZeroValue(zeroRows, i) || isZeroValue(zeroCols, j)) {
        mat[i][j] = 0;
      }
    }
  }

  return mat;
};

// TESTS

const printMatrix = (mat) => {
  let shape = [mat.length, mat[0].length];
  function col(mat, i) {
    return mat.map((row) => row[i]);
  }
  let colMaxes = [];
  for (let i = 0; i < shape[1]; i++) {
    colMaxes.push(
      Math.max.apply(
        null,
        col(mat, i).map((n) => n.toString().length)
      )
    );
  }

  mat.forEach((row) => {
    console.log.apply(
      null,
      row.map((val, j) => {
        return (
          new Array(colMaxes[j] - val.toString().length + 1).join(' ') +
          val.toString() +
          '  '
        );
      })
    );
  });
};

const createMatrix = (m, n) => {
  return Array(m)
    .fill(null)
    .map((_, i) =>
      Array(n)
        .fill(null)
        .map((_, j) => i * m + j + 1)
    );
};

console.log('Input:');
printMatrix(createMatrix(3, 4));

const matrix = createMatrix(3, 4);

matrix[0][1] = 0;
matrix[1][2] = 0;

console.log('Output:');
printMatrix(zeroMatrix(matrix));

const rotateMatrix = (mat) => {
  const n = mat.length;
  const layers = Math.floor(n / 2);

  for (let layer = 0; layer < layers; layer++) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = mat[first][i];

      // left => top
      mat[first][i] = mat[last - offset][first];

      // bottom => left
      mat[last - offset][first] = mat[last][last - offset];

      // right => bottom
      mat[last][last - offset] = mat[i][last];

      // top => right
      mat[i][last] = top;
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

const createMatrix = (n) => {
  return Array(n)
    .fill(null)
    .map((_, i) =>
      Array(n)
        .fill(null)
        .map((_, j) => i * n + j + 1)
    );
};

const testForN = (n) => {
  const matrix = createMatrix(n);

  console.log('Input:');
  printMatrix(matrix);
  console.log('Output:');
  printMatrix(rotateMatrix(matrix));
};

testForN(3);
testForN(4);

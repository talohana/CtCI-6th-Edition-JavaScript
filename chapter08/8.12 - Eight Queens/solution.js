const checkValid = (cols, row1, col1) => {
  for (let row2 = 0; row2 < row1; row2++) {
    const col2 = cols[row2];

    if (col1 === col2) return false;

    const colDistance = Math.abs(col2 - col1);
    const rowDistance = row1 - row2;

    /* 
        If the distance between the rows is equal to the distance
        between the columns they are on the same diagonal
    */
    if (colDistance === rowDistance) return false;
  }

  return true;
};

const placeQueens = gridSize => {
  const results = [];

  const placeQueensHelper = (row, cols) => {
    if (row === gridSize) {
      results.push([...cols]);
    } else {
      for (let col = 0; col < gridSize; col++) {
        if (checkValid(cols, row, col)) {
          cols[row] = col;
          placeQueensHelper(row + 1, cols);
        }
      }
    }
  };

  placeQueensHelper(0, []);

  return results;
};

// TESTS

const results = placeQueens(4);

console.log(results);

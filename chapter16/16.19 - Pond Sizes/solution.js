function computeSize(land, row, col) {
  if (
    row < 0 ||
    col < 0 ||
    row >= land.length ||
    col >= land[0].length ||
    // Visited or not water
    land[row][col] !== 0
  ) {
    return 0;
  }

  let size = 1;

  // Mark as visited
  land[row][col] = -1;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      size += computeSize(land, row + dr, col + dc);
    }
  }

  return size;
}

function computePondSizes(land) {
  const pondSizes = [];

  for (let r = 0; r < land.length; r++) {
    for (let c = 0; c < land[0].length; c++) {
      if (land[r][c] === 0) {
        const size = computeSize(land, r, c);
        pondSizes.push(size);
      }
    }
  }

  return pondSizes;
}

// TESTS

const land = [
  [0, 2, 1, 0, 1],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
];

console.log(computePondSizes(land));

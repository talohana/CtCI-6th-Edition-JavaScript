const robotInGrid = (maze) => {
  if (maze === null || maze.length === 0) return null;

  const r = maze.length;
  const c = maze[0].length;
  const path = [];
  const failedPoints = {};

  const getPath = (i, j) => {
    if (i < 0 || j < 0 || !maze[i][j]) return false;
    if (`${i},${j}` in failedPoints) return false;

    const isAtOrigin = i === 0 && j === 0;

    if (isAtOrigin || getPath(i - 1, j) || getPath(i, j - 1)) {
      path.push([i, j]);
      return true;
    }

    failedPoints[`${i},${j}`] = true;
    return false;
  };

  if (getPath(r - 1, c - 1)) {
    return path;
  } else {
    return null;
  }
};

// TESTS

const grid = [
  [true, true, true, true],
  [true, false, true, false],
  [false, true, true, true],
];

console.log(robotInGrid(grid));

const Color = {
  White: 'W',
  Black: 'B',
};

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]; // UP, RIGHT, DOWN, LEFT

class Grid {
  rows = {};
  topLeft = [0, 0];
  bottomRight = [0, 0];

  getCell(r, c) {
    if (!(r in this.rows)) this.rows[r] = {};
    if (!(c in this.rows[r])) this.rows[r][c] = Color.White;

    this.topLeft = [Math.min(this.topLeft[0], r), Math.min(this.topLeft[1], c)];
    this.bottomRight = [
      Math.max(this.bottomRight[0], r),
      Math.max(this.bottomRight[1], c),
    ];

    return this.rows[r][c];
  }

  flipCell(r, c) {
    const color = this.getCell(r, c);

    this.rows[r][c] = color === Color.White ? Color.Black : Color.White;
  }
}

function gridAfterKSteps(k) {
  const grid = new Grid();
  let r = 0;
  let c = 0;
  let direction = 0;

  for (let i = 0; i < k; i++) {
    const color = grid.getCell(r, c);

    grid.flipCell(r, c);
    direction += color === Color.White ? 1 : -1;
    direction += directions.length;
    direction %= directions.length;

    const [rDelta, cDelta] = directions[direction];
    r += rDelta;
    c += cDelta;
  }

  return grid;
}

// TESTS
const grid = gridAfterKSteps(150);

for (let r = grid.topLeft[0]; r < grid.bottomRight[0]; r++) {
  for (let c = grid.topLeft[1]; c < grid.bottomRight[1]; c++) {
    process.stdout.write(grid.getCell(r, c) + ' ');
  }
  console.log();
}

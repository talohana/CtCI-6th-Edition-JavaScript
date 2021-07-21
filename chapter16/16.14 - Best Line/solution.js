class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(p1, p2) {
    if (p1.x === p2.x) {
      this.slope = Infinity;
      this.yintercept = p1.x;
    } else {
      this.slope = (p1.y - p2.y) / (p1.x - p2.x);
      this.yintercept = p1.y - this.slope * p1.x;
    }
  }
}

function bestLine(points) {
  const equivalentLines = {};

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const line = new Line(points[i], points[j]);
      const key = `y = ${line.slope}x + ${line.yintercept}`;

      if (key in equivalentLines) {
        equivalentLines[key].push(line);
      } else {
        equivalentLines[key] = [line];
      }
    }
  }

  let maxCount = 0;
  let maxLine = null;

  Object.values(equivalentLines).forEach(lines => {
    if (lines.length > maxCount) {
      maxCount = lines.length;
      maxLine = lines[0];
    }
  });

  return maxLine;
}

// TESTS

const points = [
  new Point(0, 1),
  new Point(3, 5),
  new Point(1, 5),
  new Point(1, 7),
  new Point(3, 4),
];

const maxLine = bestLine(points);

console.log(maxLine);

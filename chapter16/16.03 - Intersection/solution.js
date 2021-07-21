class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;

    if (start.x === end.x) {
      this.slope = Number.POSITIVE_INFINITY;
      this.yintercept = Number.POSITIVE_INFINITY;
    } else {
      this.slope = (end.y - start.y) / (end.x - start.x);
      this.yintercept = end.y - slope * end.x;
    }
  }

  isVertical() {
    return this.slope === Number.POSITIVE_INFINITY;
  }

  getYFromX(x) {
    if (this.isVertical()) {
      return Number.POSITIVE_INFINITY;
    }

    return slope * x + this.yintercept;
  }
}

function isBetween(start, middle, end) {
  if (start > end) {
    return end <= middle && middle <= start;
  } else {
    return start <= middle && middle <= end;
  }
}

function isPointBetween(start, middle, end) {
  return (
    isBetween(start.x, middle.x, end.x) && isBetween(start.y, middle.y, end.y)
  );
}

function intersection(start1, end1, start2, end2) {
  // Compute lines, including slope and y-intercept (b)
  const line1 = new Line(start1, end1);
  const line2 = new Line(start2, end2);

  /* 
    If the lines are parallel they have the same b value.
    If so check start / end of one line is on the other line
  */
  if (line1.slope === line2.slope) {
    if (line1.yintercept !== line2.yintercept) return null;

    if (isPointBetween(start1, start2, end1)) return start2;
    else if (isPointBetween(start1, end2, end1)) return end2;
    else if (isPointBetween(start2, end1, end2)) return end1;
    else if (isPointBetween(start2, start1, end2)) return start1;
    else return null;
  }

  /* Compute the intersection of the infinite lines and check boundary */
  let x;
  if (line1.isVertical() || line2.isVertical()) {
    x = line1.isVertical() ? line1.start.x : line2.start.x;
  } else {
    // set y = mx + b equations equal and solve for x
    x = (line2.yintercept - line1.yintercept) / (line1.slope - line2.slope);
  }

  // get intersection's y coordinate using a non-vertical line
  const y = line1.isVertical() ? line2.getYFromX(x) : line1.getYFromX(x);

  const intersection = new Point(x, y);

  // check if intersection is between the line segments
  if (
    isPointBetween(start1, intersection, end1) &&
    isPointBetween(start2, intersection, end2)
  ) {
    return intersection;
  }

  return null;
}

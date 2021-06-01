/* Boxes is array of object with properties: w, h, d */

const tallestStack = boxes => {
  /* Sort by any dimension in ascending order */
  boxes.sort((a, b) => b.height - a.height);

  const cache = Array(boxes.length).fill(0);

  const canBeAbove = (box1, box2) =>
    box1.w > box2.w && box1.h > box2.h && box1.d > box2.d;

  const tallestStackHelper = (bottom, offset) => {
    if (offset >= boxes.length) return 0; // base case

    const newBottom = boxes[offset];
    const heightWithBottom = 0;

    if (bottom == null || canBeAbove(newBottom, bottom)) {
      if (cache[offset] === 0) {
        cache[offset] = tallestStackHelper(newBottom, offset + 1);
        cache[offset] += newBottom.height;
      }

      heightWithBottom = cache[offset];
    }

    /* Without this bottom */
    const heightWithoutBottom = tallestStackHelper(bottom, offset + 1);

    return Math.max(heightWithBottom, heightWithoutBottom);
  };

  return tallestStackHelper(null, 0);
};

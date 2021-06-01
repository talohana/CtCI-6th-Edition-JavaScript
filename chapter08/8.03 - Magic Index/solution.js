const findMagicIndex = A => {
  const helper = (A, start, end) => {
    if (end < start) return -1;

    const midIndex = Math.floor((start + end) / 2);
    const midValue = A[midIndex];

    if (midValue === midIndex) return midIndex;

    // Search Left
    const leftIndex = Math.min(midIndex - 1, midValue); // skip unnecessary searches
    const left = helper(A, start, leftIndex);
    if (left >= 0) return left;

    // Search Right
    const rightIndex = Math.max(midIndex + 1, midValue);
    const right = helper(A, rightIndex, end);

    return right;
  };

  return helper(A, 0, A.length - 1);
};

// TESTS

const A = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
console.log(JSON.stringify(A), findMagicIndex(A));

const B = [-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13];
console.log(JSON.stringify(B), findMagicIndex(B));

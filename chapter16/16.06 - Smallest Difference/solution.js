function smallestDifference(A, B) {
  if (!A?.length || !B?.length) return -1;

  A.sort((x, y) => x - y);
  B.sort((x, y) => x - y);

  let pA = 0;
  let pB = 0;
  let minDiff = Infinity;

  while (pA < A.length && pB < B.length) {
    let aElement = A[pA];
    let bElement = B[pB];

    if (aElement >= bElement) {
      minDiff = Math.min(minDiff, aElement - bElement);
      pB++;
    } else {
      minDiff = Math.min(minDiff, bElement - aElement);
      pA++;
    }
  }

  return minDiff;
}

// TESTS

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));
console.log(smallestDifference([1, 7, 2, 0, 15], [6, 3, 2, 1]));
console.log(smallestDifference([-5, 10, -3, 2], [-6]));

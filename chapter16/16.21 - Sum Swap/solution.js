function sumArray(arr) {
  return arr.reduce((sum, x) => sum + x);
}

function findSumSwap(A, B) {
  const sumA = sumArray(A);
  const sumB = sumArray(B);
  const diff = (sumA - sumB) / 2;
  const bElements = new Set(B);

  for (let a of A) {
    const b = a - diff;
    if (bElements.has(b)) {
      return [a, b];
    }
  }

  return null;
}

// TESTS

console.log(findSumSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]));
console.log(findSumSwap([3, 6, 3, 3], [4, 1, 2, 1, 1, 2]));

function findPairsWithSum(arr, n) {
  const pairs = [];
  const counters = {};

  for (let num of arr) {
    const complement = n - num;

    if (complement in counters && counters[complement] > 0) {
      pairs.push([num, complement]);
      counters[complement] -= 1;
    } else {
      counters[num] = (counters[num] || 0) + 1;
    }
  }

  return pairs;
}

// TESTS

console.log(findPairsWithSum([1, 3, 4, -2, -1, 8, 3, 2, 1], 3));

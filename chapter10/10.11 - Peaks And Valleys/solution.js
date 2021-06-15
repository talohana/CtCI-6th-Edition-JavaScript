const peaksAndValleys = numbers => {
  const maxAdj = (a, b, c) => {
    const aValue = a >= 0 && a < numbers.length ? numbers[a] : -Infinity;
    const bValue = b >= 0 && b < numbers.length ? numbers[b] : -Infinity;
    const cValue = c >= 0 && c < numbers.length ? numbers[c] : -Infinity;

    const max = Math.max(aValue, bValue, cValue);

    if (max === aValue) return a;
    else if (max === bValue) return b;

    return c;
  };

  if (!numbers || numbers.length === 0) return;

  // Sort in ascending order O(nlogn)
  numbers.sort((a, b) => a - b);

  for (let i = 1; i < numbers.length; i += 2) {
    const biggestIndex = maxAdj(i - 1, i, i + 1);

    if (biggestIndex !== i) {
      [numbers[i], numbers[biggestIndex]] = [numbers[biggestIndex], numbers[i]];
    }
  }
};

// TESTS

const numbers = [5, 2, 1, 3, 1, 3];

peaksAndValleys(numbers);

console.log(numbers);

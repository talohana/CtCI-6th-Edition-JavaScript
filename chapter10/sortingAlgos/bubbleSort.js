const { generateRandomArray } = require('./generateRandomArray');

const bubbleSort = array => {
  if (!array) return [];

  const n = array.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) return;
  }
};

// TESTS

const array = generateRandomArray(10, 0, 10);

console.log(...array);

bubbleSort(array);

console.log(...array);

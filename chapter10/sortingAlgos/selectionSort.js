const { generateRandomArray } = require('./generateRandomArray');

const selectionSort = originalArray => {
  if (!originalArray) return [];

  const n = originalArray.length;
  const array = [...originalArray];

  for (let i = 0; i < n; i++) {
    let currentMinimumIndex = i;
    let currentMinimum = array[i];

    for (let j = i + 1; j < n; j++) {
      if (array[j] < currentMinimum) {
        currentMinimumIndex = j;
        currentMinimum = array[j];
      }
    }

    if (currentMinimumIndex !== i) {
      [array[i], array[currentMinimumIndex]] = [
        array[currentMinimumIndex],
        array[i],
      ];
    }
  }

  return array;
};

// TESTS

const array = generateRandomArray(10, 0, 10);

console.log(...array);

const sortedArray = selectionSort(array);

console.log(...sortedArray);

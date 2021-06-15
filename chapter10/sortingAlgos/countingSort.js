const { generateRandomArray } = require('./generateRandomArray');

const countingSort = array => {
  let smallestElement = Infinity;
  let biggestElement = -Infinity;

  // Detect smallest and biggest elements
  array.forEach(element => {
    if (element < smallestElement) {
      smallestElement = element;
    }

    if (element > biggestElement) {
      biggestElement = element;
    }
  });

  // Init buckets
  const buckets = Array(biggestElement - smallestElement + 1).fill(0);

  // Count frequency of elements
  array.forEach(element => {
    buckets[element - smallestElement] += 1;
  });

  // Accumulate frequencies
  for (let i = 0; i < buckets.length - 1; i++) {
    buckets[i + 1] += buckets[i];
  }

  // Shift frequencies to the right
  buckets.pop();
  buckets.unshift(0);

  const sortedArray = Array(array.length).fill(null);

  array.forEach(element => {
    const sortedPosition = buckets[element - smallestElement];

    sortedArray[sortedPosition] = element;

    buckets[element - smallestElement] += 1;
  });

  return sortedArray;
};

// TESTS

const array = generateRandomArray(10, 0, 10);

console.log(...array);

const sortedArray = countingSort(array);

console.log(...sortedArray);

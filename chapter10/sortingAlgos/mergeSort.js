const { generateRandomArray } = require('./generateRandomArray');

const merge = (left, right) => {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    const leftElement = leftIndex < left.length ? left[leftIndex] : Infinity;
    const rightElement =
      rightIndex < right.length ? right[rightIndex] : Infinity;

    if (leftElement < rightElement) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result;
};

const mergeSort = originalArray => {
  if (originalArray.length <= 1) return originalArray;

  const mid = Math.floor(originalArray.length / 2);

  const leftArray = originalArray.slice(0, mid);
  const rightArray = originalArray.slice(mid);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
};

// TESTS

const array = generateRandomArray(10, 0, 10);

console.log(...array);

const sortedArray = mergeSort(array);

console.log(...sortedArray);

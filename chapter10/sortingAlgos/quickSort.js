const { generateRandomArray } = require('./generateRandomArray');

const quickSort = originalArray => {
  const array = [...originalArray];
  const n = array.length;

  if (n <= 1) return array;

  const swap = (a, b) => ([array[a], array[b]] = [array[b], array[a]]);

  const partition = (left, right, pivot) => {
    while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;

      if (left <= right) {
        swap(left, right);
        left++;
        right--;
      }
    }

    return left;
  };

  const quickSort = (left, right) => {
    if (left >= right) return;

    const pivot = array[Math.floor((left + right) / 2)];
    const index = partition(left, right, pivot);

    quickSort(left, index - 1);
    quickSort(index, right);
  };

  quickSort(0, n - 1);

  return array;
};

exports.quickSort = quickSort;

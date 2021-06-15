const { generateRandomArray } = require('../sortingAlgos/generateRandomArray');
const { quickSort } = require('../sortingAlgos/quickSort');

const sortedArrays = (a, b, aCount, bCount) => {
  let aIndex = aCount - 1;
  let bIndex = bCount - 1;

  // Merge the arrays backwards to avoid shifting
  for (let i = aCount + bCount; i > 0; i--) {
    const aElement = aIndex >= 0 ? a[aIndex] : -Infinity;
    const bElement = bIndex >= 0 ? b[bIndex] : -Infinity;

    if (aElement > bElement) {
      a[i] = aElement;
      aIndex--;
    } else {
      a[i] = bElement;
      bIndex--;
    }
  }
};

// TESTS

const aCount = 5;
const bCount = 3;

const a = quickSort(generateRandomArray(aCount, 0, 10));
const b = quickSort(generateRandomArray(bCount, 0, 10));

// Insert buffer at the end of a
a.push(...Array(bCount).fill(null));

console.log('A', ...a);
console.log('B', ...b);

sortedArrays(a, b, aCount, bCount);

console.log('A', ...a);

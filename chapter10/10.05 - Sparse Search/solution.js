function sparseSearch(array, target) {
  function helper(start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (array[mid] === '') {
      let left = mid - 1;
      let right = mid + 1;

      // find first non-empty string
      while (true) {
        // out of bounds
        if (left < start && right > end) {
          return -1;
        } else if (right <= end && !(array[right] === '')) {
          mid = right;
          break;
        } else if (left >= start && !(array[left] === '')) {
          mid = left;
          break;
        }

        right++;
        left--;
      }

      if (target === array[mid]) {
        return mid;
      } else if (target.localeCompare(array[mid]) > 0) {
        return helper(mid + 1, end);
      } else {
        return helper(start, mid - 1);
      }
    }
  }

  return helper(0, array.length - 1);
}

// TESTS

const array = ['at', '', '', '', 'cat', '', '', 'dad', '', 'hello', '', ''];

console.log(sparseSearch(array, 'cat'));
console.log(sparseSearch(array, 'dad'));
console.log(sparseSearch(array, 'data'));
console.log(sparseSearch(array, 'hello'));

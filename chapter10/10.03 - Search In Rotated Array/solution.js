const NOT_FOUND_CODE = -1;

const searchInRotatedArray = (array, x) => {
  const helper = (start, end) => {
    if (start > end) return NOT_FOUND_CODE;

    const mid = Math.floor((start + end) / 2);
    const midElement = array[mid];

    if (midElement === x) return mid;

    const startElement = array[start];
    const endElement = array[end];

    if (startElement < midElement) {
      if (startElement <= x && x < midElement) {
        return helper(start, mid - 1);
      } else {
        return helper(mid + 1, end);
      }
    } else if (midElement < endElement) {
      if (midElement < x && x <= endElement) {
        return helper(mid + 1, end);
      } else {
        return helper(start, mid - 1);
      }
    } else {
      let location = NOT_FOUND_CODE;

      if (startElement === midElement) {
        location = helper(mid + 1, end);
      }

      if (location === NOT_FOUND_CODE && midElement === endElement) {
        location = helper(start, mid - 1);
      }

      return location;
    }
  };

  return helper(0, array.length - 1);
};

// TESTS

console.log(searchInRotatedArray([70, 75, 17, 18, 30, 31, 35, 50, 60], 18));
console.log(searchInRotatedArray([24, 25, 26, 27, 30, 31, 13, 18, 23], 18));
console.log(searchInRotatedArray([30, 30, 30, 30, 30, 31, 13, 18, 23], 18));
console.log(searchInRotatedArray([5, 12, 18, 27, 30, 30, 30, 30, 30], 18));

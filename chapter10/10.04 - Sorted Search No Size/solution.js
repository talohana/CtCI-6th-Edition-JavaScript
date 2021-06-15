const ERROR_CODE = -1;

class Listy {
  #elements = [];

  constructor(elements) {
    this.#elements = elements;
  }

  elementAt(i) {
    if (i < 0 || i >= this.#elements.length) return ERROR_CODE;

    return this.#elements[i];
  }
}

const sortedSearchNoSize = (listy, target) => {
  const approximateSize = () => {
    if (listy.elementAt(0) === ERROR_CODE) return 0;

    let size = 1;

    while (listy.elementAt(size) !== ERROR_CODE) size *= 2;

    return size;
  };

  const helper = (start, end) => {
    if (start > end) return ERROR_CODE;

    const mid = Math.floor((start + end) / 2);

    if (listy.elementAt(mid) === ERROR_CODE || listy.elementAt(mid) > target) {
      return helper(start, mid - 1);
    } else if (listy.elementAt(mid) === target) {
      return mid;
    } else {
      return helper(mid + 1, end);
    }
  };

  const size = approximateSize();

  return helper(0, size);
};

// TESTS

const listy = new Listy([1, 15, 16, 16, 24, 28, 32, 55, 67]);

console.log(sortedSearchNoSize(listy, 15));
console.log(sortedSearchNoSize(listy, 16));
console.log(sortedSearchNoSize(listy, 55));

const multiply = (a, b) => {
  const cache = {};

  const helper = (bigger, smaller) => {
    if (smaller === 0) return 0;
    else if (smaller === 1) return bigger;

    if (smaller in cache) return cache[smaller];

    const half = smaller >> 1;
    const halfProd = helper(bigger, half);

    if (smaller % 2 === 0) return halfProd + halfProd;

    return halfProd + halfProd + bigger;
  };

  return helper(Math.max(a, b), Math.min(a, b));
};

// TESTS

console.log('7 * 9 =', multiply(7, 9));
console.log('8 * 9 =', multiply(8, 9));
console.log('5 * 5 =', multiply(5, 5));

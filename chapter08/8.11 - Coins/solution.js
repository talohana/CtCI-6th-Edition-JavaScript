const makeChange = n => {
  const cache = {};

  const makeChangeHelper = (total, denominators, index) => {
    const key = `${total}${index}`;

    if (key in cache) return cache[key];

    const coin = denominators[index];

    // Base case, there is only one denominator left
    if (index === denominators.length - 1) {
      const remaining = total % coin;
      return remaining === 0 ? 1 : 0;
    }

    let ways = 0;

    for (let amount = 0; amount <= total; amount += coin) {
      ways += makeChangeHelper(total - amount, denominators, index + 1);
    }

    cache[key] = ways;

    return ways;
  };

  return makeChangeHelper(n, [1, 5, 10, 25], 0);
};

// TESTS

console.log('77', makeChange(77));

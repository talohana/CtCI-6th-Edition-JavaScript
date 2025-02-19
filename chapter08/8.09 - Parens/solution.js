const parens = n => {
  const result = [];

  const helper = (leftRemaining, rightRemaining, str, index) => {
    if (leftRemaining < 0 || rightRemaining < leftRemaining) return;

    if (leftRemaining === 0 && rightRemaining === 0) {
      return result.push(str.join(''));
    } else {
      str[index] = '(';
      helper(leftRemaining - 1, rightRemaining, str, index + 1);

      str[index] = ')';
      helper(leftRemaining, rightRemaining - 1, str, index + 1);
    }
  };

  helper(n, n, [], 0);

  return result;
};

// TESTS

// console.log('n=2', JSON.stringify(parens(2)));
console.log('n=3', JSON.stringify(parens(3)));
// console.log('n=4', JSON.stringify(parens(4)));

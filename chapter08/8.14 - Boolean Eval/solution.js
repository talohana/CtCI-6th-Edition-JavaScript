const booleanEvaluation = (expression, result) => {
  if (!expression) return 0;

  const operatorRegex = /[\^|&]/g;
  const cache = {};

  const helper = (expression, result) => {
    if (expression === '1') return result ? 1 : 0;
    if (expression === '0') return result ? 0 : 1;

    const key = `${result}${expression}`;

    if (key in cache) return cache[key];

    const matches = expression.matchAll(operatorRegex);
    let ways = 0;

    for (let { index } of matches) {
      const operator = expression[index];
      const left = expression.substring(0, index);
      const right = expression.substring(index + 1);

      // Evaluate each side
      const leftTrue = helper(left, true);
      const leftFalse = helper(left, false);
      const rightTrue = helper(right, true);
      const rightFalse = helper(right, false);
      const total = (leftTrue + leftFalse) * (rightTrue + rightFalse);

      let totalTrue = 0;

      if (operator === '^') {
        totalTrue = leftTrue * rightFalse + leftFalse * rightTrue;
      } else if (operator === '&') {
        totalTrue = leftTrue * rightTrue;
      } else if (operator === '|') {
        totalTrue =
          leftTrue * rightFalse + leftFalse * rightTrue + leftTrue * rightTrue;
      }

      ways += result ? totalTrue : total - totalTrue;
    }

    cache[key] = ways;
    return ways;
  };

  return helper(expression, result);
};

// TESTS

console.log('1^0|0|1, false', booleanEvaluation('1^0|0|1', false));
console.log('0&0&0&1^1|0, true', booleanEvaluation('0&0&0&1^1|0', true));

const priorityOfOperators = {
  '': 0,
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};

function parseNextNumber(sequence, offset) {
  const buffer = [];
  let digit = parseInt(sequence[offset]);

  while (offset < sequence.length && Number.isInteger(digit)) {
    buffer.push(digit);
    offset += 1;
    digit = parseInt(sequence[offset]);
  }

  return parseInt(buffer.join(''));
}

function parseNextOperator(sequence, offset) {
  if (offset < sequence.length) {
    return sequence[offset];
  }

  return '';
}

function applyOperator(left, operator, right) {
  if (operator === '+') return left + right;
  if (operator === '-') return left - right;
  if (operator === '*') return left * right;
  if (operator === '/') return left / right;

  return right;
}

function collapseTop(operator, numberStack, operatorStack) {
  while (operatorStack.length >= 1 && numberStack.length >= 2) {
    const topOperator = operatorStack[operatorStack.length - 1];

    if (priorityOfOperators[operator] <= priorityOfOperators[topOperator]) {
      const second = numberStack.pop();
      const first = numberStack.pop();
      const operator = operatorStack.pop();

      const collapsed = applyOperator(first, operator, second);
      numberStack.push(collapsed);
    } else {
      break;
    }
  }
}

function compute(sequence) {
  numberStack = [];
  operatorStack = [];

  for (let i = 0; i < sequence.length; i++) {
    const value = parseNextNumber(sequence, i);
    numberStack.push(value);
    i += value.toString().length;

    if (i >= sequence.length) break;

    const operator = parseNextOperator(sequence, i);
    collapseTop(operator, numberStack, operatorStack);
    operatorStack.push(operator);
  }

  // Final Collapse
  collapseTop('', numberStack, operatorStack);
  if (numberStack.length === 1 && operatorStack.length === 0) {
    return numberStack.pop();
  }

  return 0;
}

// TESTS

console.log(compute('2*3+5/6*3+15'));

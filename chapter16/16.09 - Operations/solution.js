function sub(x, y) {
  const minusY = ~y + 1;

  return x + minusY;
}

function div(x, y) {
  if (y === 0) throw new Error('Cannot divide by zero');

  let result = 0;
  let positiveX = x > 0 ? x : sub(0, x);
  const positiveY = y > 0 ? y : sub(0, y);

  while (sub(positiveX, positiveY) >= 0) {
    result += 1;
    positiveX -= positiveY;
  }

  if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    return result;
  } else {
    return sub(0, result);
  }
}

function mul(x, y) {
  const helper = (x, y) => {
    if (y === 1) return x;
    else if (x === 1) return y;
    else if (x === 0 || y === 0) return 0;

    const half = mul(x, div(y, 2));

    if (y % 2 === 0) return half + half;
    else return half + half + x;
  };

  const positiveX = x > 0 ? x : sub(0, x);
  const positiveY = y > 0 ? y : sub(0, y);
  const result = helper(positiveX, positiveY);

  if ((x > 0 && y > 0) || (x < 0 && y < 0)) return result;
  else return sub(0, result);
}

// TESTS

// SUB

console.log('Sub');
console.log(sub(0, 5));
console.log(sub(20, 15));
console.log(sub(34, 23));

// DIV

console.log('Div');
console.log(div(20, 5));
console.log(div(20, 7));
console.log(div(30, -10));

// MUL

console.log('Mul');
console.log(mul(2, 3));
console.log(mul(-5, 4));
console.log(mul(7, -3));
console.log(mul(20, 5));

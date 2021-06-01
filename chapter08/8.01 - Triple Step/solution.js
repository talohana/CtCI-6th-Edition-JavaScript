const tripleStep = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else if (n === 2) return 2;
  else if (n === 3) return 4;

  let a = 1;
  let b = 2;
  let c = 4;

  for (let i = 3; i < n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }

  return c;
};

// TESTS

console.log('n=3', tripleStep(3));
console.log('n=4', tripleStep(4));
console.log('n=10', tripleStep(10));

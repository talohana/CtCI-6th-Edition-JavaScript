function factorialZeros(n) {
  let count = 0;

  if (n < 0) {
    return -1;
  }

  for (let i = 5; Math.floor(n / i) > 0; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

// TESTS

console.log(factorialZeros(2));
console.log(factorialZeros(5));
console.log(factorialZeros(10));
console.log(factorialZeros(20));

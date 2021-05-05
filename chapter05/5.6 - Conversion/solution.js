const conversion = (a, b) => {
  let diff = a ^ b;
  let count = 0;

  while (diff > 0) {
    if (diff & 1) {
      count++;
    }

    diff >>= 1;
  }

  return count;
};

// TESTS

console.log(
  'A:',
  (29).toString(2),
  'B:',
  (15).toString(2),
  'Diff:',
  conversion(29, 15)
);

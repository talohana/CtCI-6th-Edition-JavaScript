const insert = (N, M, i, j) => {
  if (i > j || i < 0 || j > 32) return 0;

  const allOnes = ~0;
  const left = j < 31 ? allOnes << (j + 1) : 0;
  const right = (1 << i) - 1;
  const mask = left | right;

  return (N & mask) | (M << i);
};

// TESTS
const N = 0b10000000000;
const M = 0b10011;
const i = 2;
const j = 6;

console.log(insert(N, M, i, j).toString(2));

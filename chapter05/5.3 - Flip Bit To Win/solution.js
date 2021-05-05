// O(d) time and space where d is the number of binary bits it takes to represent num in binary
const flipBitToWin = (num) => {
  let previousCount = 0;
  let currentCount = 0;
  let max = 1;

  while (num != 0) {
    if ((num & 1) === 1) {
      currentCount++;
    } else if ((num & 1) === 0) {
      previousCount = (num & 2) === 0 ? 0 : currentCount;
      currentCount = 0;
    }

    max = Math.max(previousCount + currentCount + 1, max);
    num >>>= 1;
  }

  return max;
};

// TESTS

console.log(flipBitToWin(1775));

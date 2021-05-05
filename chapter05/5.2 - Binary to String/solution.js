const ERROR_CODE = 'ERROR';
const MAX_BITS = 32;

const binaryToString = (num) => {
  if (num >= 1 || num < 0) return ERROR_CODE;

  const result = ['.'];

  while (num > 0) {
    if (result.length > MAX_BITS) return ERROR_CODE;

    // Shift left by one bit
    const r = num * 2;

    if (r >= 1) {
      result.push('1');
      num = r - 1;
    } else {
      result.push('0');
      num = r;
    }
  }

  return result.join('');
};

// TESTS
console.log(binaryToString(0.625));
console.log(binaryToString(0.625234));

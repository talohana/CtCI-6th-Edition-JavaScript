const LOWER_BOUND_NUMERIC_CODE = 'a'.charCodeAt(0);
const UPPER_BOUND_NUMERIC_CODE = 'z'.charCodeAt(0);
const NON_CHAR_CODE = -1;

const getChar = (char) => {
  const charCode = char.charCodeAt(0);

  if (
    charCode >= LOWER_BOUND_NUMERIC_CODE &&
    charCode <= UPPER_BOUND_NUMERIC_CODE
  ) {
    return charCode - LOWER_BOUND_NUMERIC_CODE;
  }

  return NON_CHAR_CODE;
};

const createBitVector = (phrase) => {
  let vector = 0;

  for (let char of phrase.toLowerCase()) {
    const code = getChar(char);
    if (code === NON_CHAR_CODE) continue;
    vector ^= 1 << code;
  }

  return vector;
};

// Explanation at page 199
const checkAtMostOneBitSet = (vector) => (vector & (vector - 1)) === 0;

// O(n) time and O(1) space
const isPalindromePerm = (phrase) => {
  const bitVector = createBitVector(phrase);
  return checkAtMostOneBitSet(bitVector);
};

// TESTS

console.log('Tact Coa:', isPalindromePerm('Tact Coa'));
console.log('abcd:', isPalindromePerm('abcd'));
console.log('Aeh Aeh', isPalindromePerm('Aeh Aeh'));

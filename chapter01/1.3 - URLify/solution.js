const WHITESPACE = ' ';
const WHITESPACE_REPLACEMENT = '%20';

// O(n) both time ans space complexities
const urlify = (s, length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(s[i] === WHITESPACE ? WHITESPACE_REPLACEMENT : s[i]);
  }

  return result.join('');
};

// TESTS

console.log('("abcd", 4):', urlify('abcd', 4));
console.log('("hello world", 11):', urlify('hello world', 11));
console.log('("how are you    ", 11):', urlify('how are you    ', 11));

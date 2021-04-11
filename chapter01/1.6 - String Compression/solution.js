// O(n) time and space complexity
const strComp = (s) => {
  const charCount = [];
  let i = 0;

  while (i < s.length) {
    const char = s[i];
    let count = 1;
    i++;

    while (i < s.length && s[i] === char) {
      count++;
      i++;
    }

    charCount.push(`${char}${count}`);
  }

  const compressed = charCount.join('');

  return compressed.length < s.length ? compressed : s;
};

// TESTS

console.log('aaaabbbccaa:', strComp('aaaabbbccaa'));
console.log('abcdabcd:', strComp('abcdabcd'));
console.log('baaab:', strComp('baaab'));
console.log('baaaaaab:', strComp('baaaaaab'));

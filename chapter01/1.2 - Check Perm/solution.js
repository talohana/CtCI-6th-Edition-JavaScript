// O(s1 + s2) = O(s)
const checkPermutation = (s1, s2) => {
  if (s1 === null || s2 === null || s1.length !== s2.length) {
    return false;
  }

  const memory = {};

  // O(s1)
  for (let c of s1) {
    memory[c] = (memory[c] || 0) + 1;
  }

  // O(s2)
  for (let c of s2) {
    if (!(c in memory) || memory[c] === 0) {
      return false;
    }
    memory[c] -= 1;
  }

  return true;
};

// TESTS

console.log('(abbdecf, acfbdbe):', checkPermutation('abbdecf', 'acfbdbe'));
console.log('(abedc, bbc):', checkPermutation('abedc', 'bbc'));
console.log('(abedc, abedd):', checkPermutation('abedc', 'abedd'));

const isSubstring = (s1, s2) => s1.includes(s2);

// O(M + N) where N is the length of s1 and M is the length of s2
const isStringRotation = (s1, s2) =>
  s1.length === s2.length && isSubstring(s1 + s1, s2);

// TESTS

console.log(
  '("waterbottle", "erbottlewat")',
  isStringRotation('waterbottle', 'erbottlewat')
);

console.log('("hello", "lohel")', isStringRotation('hello', 'lohel'));
console.log('("hello", "lohe")', isStringRotation('hello', 'lohe'));

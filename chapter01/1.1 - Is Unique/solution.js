// O(n^2)
const bruteForce = (s) => {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) return false;
    }
  }

  return true;
};

// O(n)
const withDataStructure = (s) => {
  const memory = {};

  for (let c of s) {
    if (c in memory) return false;
    memory[c] = true;
  }

  return true;
};

// O(n)
const withoutDataStructure = (s) => {
  const indexOffset = "a".charCodeAt(0);
  let mask = 0;

  for (let c of s) {
    const charCode = c.charCodeAt(0);
    const currentCharMask = 1 << (charCode - indexOffset);
    const exists = mask & currentCharMask;

    if (exists) return false;

    mask |= currentCharMask;
  }

  return true;
};

// TESTS
console.log("Brute Force:");
console.log("abdcefc:", bruteForce("abdcefc"));
console.log("abcdef:", bruteForce("abcdef"));

console.log("With DS:");
console.log("abdcefc:", withDataStructure("abdcefc"));
console.log("abcdef:", withDataStructure("abcdef"));

console.log("Without DS:");
console.log("abdcefc:", withoutDataStructure("abdcefc"));
console.log("abcdef:", withoutDataStructure("abcdef"));

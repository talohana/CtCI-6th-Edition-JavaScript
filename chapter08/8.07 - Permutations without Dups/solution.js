const insertCharAt = (word, char, i) => {
  return `${word.substring(0, i)}${char}${word.substring(i)}`;
};

const permutationsWithoutDups = str => {
  if (str === null) return null;

  if (str === '') return [''];

  const first = str[0];
  const remaining = str.substring(1);
  const words = permutationsWithoutDups(remaining);

  return words.reduce((permutations, word) => {
    for (let i = 0; i <= word.length; i++) {
      permutations.push(insertCharAt(word, first, i));
    }

    return permutations;
  }, []);
};

// TESTS

console.log('ab', JSON.stringify(permutationsWithoutDups('ab')));
console.log('abc', JSON.stringify(permutationsWithoutDups('abc')));

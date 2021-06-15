const sortChars = str => [...str].sort().join('');

const groupWordsByChars = words => {
  return words.reduce((groups, word) => {
    const sortedWord = sortChars(word);

    if (sortedWord in groups) {
      groups[sortedWord].push(word);
    } else {
      groups[sortedWord] = [word];
    }

    return groups;
  }, {});
};

const groupAnagrams = words => {
  const groups = groupWordsByChars(words);

  return Object.values(groups).flatMap(group => group);
};

// TESTS

const words = ['hello', 'olleh', 'abc', 'bca', 'elloh', 'bbb', 'cba'];

const result = groupAnagrams(words);

console.log(...result);

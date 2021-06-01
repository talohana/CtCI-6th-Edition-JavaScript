const buildFrequencyTable = str => {
  return [...(str ?? '')].reduce((frequency, char) => {
    frequency[char] = (frequency[char] ?? 0) + 1;

    return frequency;
  }, {});
};

const permutationsWithDups = str => {
  const frequencyTable = buildFrequencyTable(str);
  const result = [];

  const helper = (frequencyTable, prefix, remaining, result) => {
    if (remaining === 0) {
      result.push(prefix);
      return;
    }

    Object.entries(frequencyTable).forEach(([char, count]) => {
      if (count > 0) {
        frequencyTable[char] = count - 1;
        helper(frequencyTable, prefix + char, remaining - 1, result);
        frequencyTable[char] = count;
      }
    });
  };

  helper(frequencyTable, '', str.length, result);

  return result;
};

// TESTS

console.log('AABC', JSON.stringify(permutationsWithDups('AABC')));

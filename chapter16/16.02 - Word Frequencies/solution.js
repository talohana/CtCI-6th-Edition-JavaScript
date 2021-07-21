const fs = require('fs');
const path = require('path');

const frequenciesTable = {};

const setupFrequenciesTable = path => {
  try {
    const data = fs.readFileSync(path, 'utf8');

    data.split(' ').forEach(word => {
      frequenciesTable[word] = (frequenciesTable[word] || 0) + 1;
    });
  } catch (err) {
    console.log(err);
  }
};

const getFrequency = word => {
  if (!frequenciesTable) {
    throw new Error('Frequencies table is not initialized.');
  } else {
    return frequenciesTable[word] || 0;
  }
};

// TESTS

setupFrequenciesTable(path.join(__dirname, 'input.txt'));

console.log(getFrequency('leo'));
console.log(getFrequency('viverra'));
console.log(getFrequency('commodo'));

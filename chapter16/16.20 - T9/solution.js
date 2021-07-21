const { Trie } = require('../../lib/data-structures/chapter-2/trie');

const digitToChars = {
  0: [],
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function getValidWords(number, index, prefix, trieNode, results) {
  if (index === number.length) {
    if (trieNode.end) {
      results.push(prefix);
    }
    return;
  }

  const digit = number[index];
  const letters = digitToChars[digit];

  if (letters) {
    letters.forEach(letter => {
      const child = trieNode.children[letter];

      if (child) {
        getValidWords(number, index + 1, prefix + letter, child, results);
      }
    });
  }
}

function getValidT9Words(number, trie) {
  const results = [];

  getValidWords(number, 0, '', trie.root, results);

  return results;
}

// TESTS

const trie = new Trie();

trie.insert('tree');
trie.insert('used');
trie.insert('tail');

console.log(getValidT9Words('8733', trie));

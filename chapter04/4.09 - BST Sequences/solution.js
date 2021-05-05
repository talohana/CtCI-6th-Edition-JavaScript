const BST = require('../util/BST');

const bstSequences = (node) => {
  const result = [];

  if (node === null) {
    result.push([]);
    return result;
  }

  const leftSequences = bstSequences(node.left);
  const rightSequences = bstSequences(node.right);

  for (let left of leftSequences) {
    for (let right of rightSequences) {
      const weaved = [];
      weave(left, right, weaved, [node.value]);
      result.push(...weaved);
    }
  }

  return result;
};

const weave = (first, second, results, prefix) => {
  if (first.length === 0 || second.length === 0) {
    const result = [...prefix, ...first, ...second];
    results.push(result);
    return;
  }

  const firstHead = first.shift();
  prefix.push(firstHead);
  weave(first, second, results, prefix);
  prefix.pop();
  first.unshift(firstHead);

  const secondHead = second.shift();
  prefix.push(secondHead);
  weave(first, second, results, prefix);
  prefix.pop();
  second.unshift(secondHead);
};

// TESTS

const root = new BST(5);
root.insert(6);
root.insert(7);
// root.insert(1);
// root.insert(3);

console.log(bstSequences(root));

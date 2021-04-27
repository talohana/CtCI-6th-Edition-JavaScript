const BST = require('../util/BST');

// time - O(nlogn), space - O(n)
const createMinimalTree = (values) => {
  const createTreeHelper = (values, s, e) => {
    if (s > e) return null;

    const mid = Math.floor((s + e) / 2);
    const bst = new BST(values[mid]);
    bst.left = createTreeHelper(values, s, mid - 1);
    bst.right = createTreeHelper(values, mid + 1, e);

    return bst;
  };

  return createTreeHelper(values, 0, values.length - 1);
};

// TESTS

createMinimalTree([1, 2, 3, 4, 5, 6, 7]).printLevelOrder();
console.log();
createMinimalTree([1, 2, 3, 4, 5, 6]).printLevelOrder();

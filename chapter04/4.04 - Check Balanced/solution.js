const BinaryTree = require('../util/BinaryTree');

const ERROR_CODE = Number.MIN_VALUE;

// O(n) time
const checkBalanced = (root) => {
  const checkHeight = (root) => {
    if (root === null) return -1;

    // Check and propagate error codes
    const rightHeight = checkHeight(root.right);
    if (rightHeight === ERROR_CODE) return ERROR_CODE;

    const leftHeight = checkHeight(root.left);
    if (leftHeight === ERROR_CODE) return ERROR_CODE;

    if (Math.abs(rightHeight - leftHeight) > 1) return ERROR_CODE;
    return Math.max(leftHeight, rightHeight) + 1;
  };

  return checkHeight(root) !== ERROR_CODE;
};

// TESTS

const tree1 = new BinaryTree(
  1,
  new BinaryTree(2, new BinaryTree(3)),
  new BinaryTree(
    4,
    new BinaryTree(5),
    new BinaryTree(6, null, new BinaryTree(7))
  )
);

const tree2 = new BinaryTree(1, new BinaryTree(2, new BinaryTree(3)));

console.log(checkBalanced(tree1));
console.log(checkBalanced(tree2));

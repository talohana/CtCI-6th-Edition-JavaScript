const BinaryTree = require('../util/BinaryTree');

const checkBST = (root) => {
  const checkMinMax = (root, min, max) => {
    if (root === null) return true;
    if (!(root.value >= min && root.value < max)) return false;

    return (
      checkMinMax(root.left, min, root.value) &&
      checkMinMax(root.right, root.value, max)
    );
  };

  return checkMinMax(root, -Infinity, Infinity);
};

// TESTS
const tree1 = new BinaryTree(
  1,
  new BinaryTree(2, new BinaryTree(1), new BinaryTree(3)),
  new BinaryTree(4)
);

console.log(checkBST(tree1));

const tree2 = new BinaryTree(
  5,
  new BinaryTree(
    3,
    new BinaryTree(1, null, new BinaryTree(2)),
    new BinaryTree(4)
  ),
  new BinaryTree(7, null, new BinaryTree(8))
);

console.log(checkBST(tree2));

const BinaryTree = require('../util/BinaryTree');

// O(h) time
const findSuccessor = (node) => {
  const leftmostChild = (node) => {
    if (node === null) return null;
    while (node.left) node = node.left;
    return node;
  };

  if (node.right) {
    return leftmostChild(node.right);
  } else {
    let parent = node.parent;

    while (parent && parent.right === node) {
      node = node.parent;
      parent = parent.parent;
    }

    return parent;
  }
};

// TESTS

const setParents = (root) => {
  if (root === null) return;

  if (root.right) {
    root.right.parent = root;
  }

  if (root.left) {
    root.left.parent = root;
  }

  setParents(root.right);
  setParents(root.left);
};

const root = new BinaryTree(
  5,
  new BinaryTree(3, new BinaryTree(2)),
  new BinaryTree(8, new BinaryTree(7), new BinaryTree(10, new BinaryTree(9)))
);

root.parent = null;

setParents(root);

console.log(findSuccessor(root).value); // successor of 5
console.log(findSuccessor(root.right).value); // successor 8
console.log(findSuccessor(root.right.right)); // successor 10
console.log(findSuccessor(root.right.right.left).value); // successor 9
console.log(findSuccessor(root.left).value); // successor 3
console.log(findSuccessor(root.left.left).value); // successor 2

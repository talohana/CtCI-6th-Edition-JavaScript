const BinaryTree = require('../util/BinaryTree');

const checkSubtree = (t1, t2) => {
  // The empty tree is a subtree of every tree
  if (t2 === null) return true;
  return subTree(t1, t2);
};

const subTree = (t1, t2) => {
  // t1 is empty
  if (t1 === null) {
    return false;
  } else if (t1.value === t2.value && matchTree(t1, t2)) {
    return true;
  } else {
    return subTree(t1.left, t2) || subTree(t1.right, t2);
  }
};

const matchTree = (t1, t2) => {
  if (t1 === null && t2 === null) {
    // Both empty
    return true;
  } else if (t1 === null || t2 === null) {
    // One is empty and the other is not
    return false;
  } else if (t1.value !== t2.value) {
    return false;
  } else {
    return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right);
  }
};

// TESTS

const t1 = new BinaryTree(
  4,
  new BinaryTree(7, new BinaryTree(2), new BinaryTree(5, new BinaryTree(1))),
  new BinaryTree(6, null, new BinaryTree(3))
);

const t2 = new BinaryTree(
  7,
  new BinaryTree(2),
  new BinaryTree(5, new BinaryTree(1))
);

console.log(checkSubtree(t1, t2));

const BinaryTree = require('../util/BinaryTree');

const firstCommonAncestor = (root, p, q) => {
  const commonAncestorHelper = (root, p, q) => {
    if (root === null) {
      return { node: null, isAncestor: false };
    }
    if (root.value === p && root.value === q) {
      return { node: root, isAncestor: true };
    }

    const rx = commonAncestorHelper(root.left, p, q);
    if (rx.isAncestor) {
      return rx;
    }

    const ry = commonAncestorHelper(root.right, p, q);
    if (ry.isAncestor) {
      return ry;
    }

    if (rx.node && ry.node) {
      return { node: root, isAncestor: true };
    } else if (root.value === p || root.value === q) {
      const isAncestor = !!(rx.node || ry.node);
      return { node: root, isAncestor };
    } else {
      return { node: rx.node ? rx.node : ry.node, isAncestor: false };
    }
  };

  const result = commonAncestorHelper(root, p, q);

  if (result.isAncestor) {
    return result.node;
  }

  return null;
};

// const firstCommonAncestor = (root, p, q) => {
//   if (!covers(root, p) || !covers(root, q)) {
//     return null;
//   }

//   const ancestorHelper = (root, p, q) => {
//     if (root === null || root === p || root === q) {
//       return root;
//     }

//     const pIsOnTheLeft = covers(root.left, p);
//     const qIsOnTheLeft = covers(root.left, q);

//     // q and p are on different sides
//     if (pIsOnTheLeft !== qIsOnTheLeft) {
//       return root;
//     }

//     // Branch right/left to search for FCA
//     const childSide = pIsOnTheLeft ? root.left : root.right;

//     return ancestorHelper(root, p, q);
//   };

//   return ancestorHelper(root, p, q);
// };

// const covers = (root, p) => {
//   if (root === null) return false;
//   if (root.value === p) return true;

//   return covers(root.left, p) || covers(Root.right, p);
// };

// TESTS

const root = new BinaryTree(
  6,
  new BinaryTree(3, new BinaryTree(4, null, new BinaryTree(9))),
  new BinaryTree(2, new BinaryTree(7), new BinaryTree(5))
);

console.log(firstCommonAncestor(root, 2, 3));

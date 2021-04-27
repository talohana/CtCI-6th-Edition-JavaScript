const LinkedList = require('../util/LinkedList');
const Queue = require('../util/Queue');
const BinaryTree = require('../util/BinaryTree');

// O(n) time and space
const listOfDepths = (root) => {
  const queue = new Queue();
  const lists = [];

  queue.enqueue({ value: root, depth: 0 });

  while (!queue.isEmpty()) {
    const { value, depth } = queue.dequeue();

    if (!lists[depth]) {
      lists[depth] = new LinkedList();
    }

    lists[depth].append(value.value);

    if (value.left) queue.enqueue({ value: value.left, depth: depth + 1 });
    if (value.right) queue.enqueue({ value: value.right, depth: depth + 1 });
  }

  return lists;
};

// TESTS

const printResult = (depths) => {
  depths.forEach((depth, i) => {
    console.log(`Depth ${i}:`, depth._toArray());
  });
};

const tree = new BinaryTree(
  1,
  new BinaryTree(2, new BinaryTree(4), new BinaryTree(5)),
  new BinaryTree(3, new BinaryTree(6, new BinaryTree(7)))
);

const depths = listOfDepths(tree);

printResult(depths);

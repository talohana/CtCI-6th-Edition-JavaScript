const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

// O(1) time and space complexity
const deleteMiddleNode = (node) => {
  if (node === null || node.next === null) return;

  const next = node.next;
  node.value = next.value;
  node.next = next.next;
  next.next = null;
};

// TESTS

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

const secondNode = list.head.next;

prettyPrintList(list);
deleteMiddleNode(secondNode);
prettyPrintList(list);

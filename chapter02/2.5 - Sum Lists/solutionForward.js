const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

const length = (list) => {
  let size = list.head ? 1 : 0;
  let current = list.head;

  while (current) {
    size++;
    current = current.next;
  }

  return size;
};

const padList = (list, paddingSize) => {
  for (let i = 0; i < paddingSize; i++) {
    list.prepend(0);
  }
};

const sumListsHelper = (l1, l2) => {
  if (l1 === null && l2 === null) {
    return { sum: new LinkedList(), carry: 0 };
  }

  const sum = sumListsHelper(l1.next, l2.next);

  const value = sum.carry + l1.value + l2.value;

  sum.sum.prepend(value % 10);
  sum.carry = Math.floor(value / 10);

  return sum;
};

const sumLists = (list1, list2) => {
  const list1Length = length(list1);
  const list2Length = length(list2);

  if (list1Length < list2Length) {
    padList(list1, list2Length - list1Length);
  } else if (list2Length < list1Length) {
    padList(list2, list1Length - list2Length);
  }

  const sum = sumListsHelper(list1.head, list2.head);

  if (sum.carry === 0) {
    return sum.sum;
  } else {
    sum.sum.prepend(sum.carry);
    return sum.sum;
  }
};

// TESTS

const list1 = new LinkedList();
list1.append(9);
list1.append(7);
list1.append(8);

const list2 = new LinkedList();
list2.append(3);
list2.append(2);

console.log('Input: (9 -> 7 -> 8) + (3 -> 2), 978 + 32');
const result = sumLists(list1, list2);

prettyPrintList(result);

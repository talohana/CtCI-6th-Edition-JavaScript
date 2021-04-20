const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

const partition = (list, x) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let left = list.head;
  let right = list.head;

  while (left.next) {
    while (right.next && right.value < x) {
      right = right.next;
      rightIndex++;
    }

    while (left.next && left.value >= x) {
      left = left.next;
      leftIndex++;
    }

    if (leftIndex > rightIndex) {
      [right.value, left.value] = [left.value, right.value];
    } else {
      left = left.next;
      leftIndex++;
    }
  }
};

// TESTS

const list = new LinkedList();

list.append(3);
list.append(5);
list.append(8);
list.append(5);
list.append(10);
list.append(2);
list.append(1);

console.log('Input:');
prettyPrintList(list);

partition(list, 5);

console.log('Output:');
prettyPrintList(list);

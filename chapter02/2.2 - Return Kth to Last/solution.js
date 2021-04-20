const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

// Time complexity: O(n), Space complexity: O(1)

const returnKthToLast = (list, k) => {
  if (k === 0) return list.tail.value ?? -1;

  let slow = list.head;
  let fast = list.head;

  for (let i = 0; i <= k; i++) {
    if (!fast) {
      // Return error code, there is no kth to the last element.
      return -1;
    }
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.value;
};

// TESTS

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

prettyPrintList(list);

for (let k = 0; k < 5; k++) {
  console.log(`k = ${k}`, returnKthToLast(list, k));
}

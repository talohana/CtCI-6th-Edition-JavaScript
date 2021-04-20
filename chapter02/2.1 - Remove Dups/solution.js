const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

const removeDups = (list) => {
  const buffer = new Set();
  let prev = null;
  let current = list.head;

  while (current) {
    if (buffer.has(current.value)) {
      const element = current;
      prev.next = current.next;
      // Unlink from list
      current = current.next;
      element.next = null;
    } else {
      buffer.add(current.value);
      prev = current;
      current = current.next;
    }
  }
};

const removeDupsWithoutBuffer = (list) => {
  let current = list.head;

  while (current) {
    let runnerPrev = current;
    let runnerCurrent = current.next;

    while (runnerCurrent) {
      if (current.value === runnerCurrent.value) {
        const element = runnerCurrent;
        runnerPrev.next = runnerCurrent.next;
        runnerCurrent = runnerCurrent.next;
        element.next = null;
      } else {
        runnerPrev = runnerCurrent;
        runnerCurrent = runnerCurrent.next;
      }
    }

    current = current.next;
  }
};

// TESTS

const list1 = new LinkedList();

list1.append(1);
list1.append(2);
list1.append(1);
list1.append(3);
list1.append(2);
list1.append(0);
list1.append(4);

console.log('Input:');
prettyPrintList(list1);

removeDups(list1);
console.log('Output:');
prettyPrintList(list1);

const list2 = new LinkedList();

list2.append(1);
list2.append(2);
list2.append(1);
list2.append(3);
list2.append(2);
list2.append(0);
list2.append(4);

console.log('Input:');
prettyPrintList(list2);

removeDupsWithoutBuffer(list2);
console.log('Output:');
prettyPrintList(list2);

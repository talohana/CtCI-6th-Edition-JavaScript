const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

// O(n) space and time
const isPalindrome = (node) => {
  const stack = [];
  let slow = node;
  let fast = node;

  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // List has odd length
  if (fast != null) {
    slow = slow.next;
  }

  while (slow) {
    const top = stack.pop();

    if (top !== slow.value) {
      return false;
    }

    slow = slow.next;
  }

  return true;
};

// TESTS
const list1 = new LinkedList();

list1.append('a');
list1.append('b');
list1.append('c');
list1.append('b');
list1.append('a');

console.log('Input:');
prettyPrintList(list1);
console.log(isPalindrome(list1.head));

const list2 = new LinkedList();

list2.append('a');
list2.append('b');
list2.append('b');
list2.append('a');

console.log('Input:');
prettyPrintList(list2);
console.log(isPalindrome(list2.head));

const list3 = new LinkedList();

list3.append('a');
list3.append('b');
list3.append('c');
list3.append('b');
list3.append('d');
list3.append('a');

console.log('Input:');
prettyPrintList(list3);
console.log(isPalindrome(list3.head));

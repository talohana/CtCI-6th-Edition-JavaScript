const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

const reverseList = (node) => {
  let reversed = null;
  let current = node;

  while (current) {
    const newNode = { value: current.value, next: reversed };
    reversed = newNode;
    current = current.next;
  }

  return reversed;
};

// O(n) time and space
const isPalindrome = (node) => {
  let reversed = reverseList(node);
  let current = node;

  while (current && reversed) {
    if (current.value !== reversed.value) {
      return false;
    }

    current = current.next;
    reversed = reversed.next;
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

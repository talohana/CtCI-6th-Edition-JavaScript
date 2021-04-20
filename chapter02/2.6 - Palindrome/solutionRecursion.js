const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

const listSize = (node) => {
  let size = 0;

  while (node) {
    size++;
    node = node.next;
  }

  return size;
};

// 0 (1 (2 (1) 2) 1) 0
const isPalindromeHelper = (node, size) => {
  // middle node, when size is 1 the list size is odd
  if (size === 0 || size === 1) {
    return { result: true, tail: size === 1 ? node.next : node };
  }

  const { result, tail } = isPalindromeHelper(node.next, size - 2);

  if (!result) return { result };

  return {
    result: node.value === tail.value,
    tail: tail.next,
  };
};

const isPalindrome = (node) => {
  const size = listSize(node);

  return isPalindromeHelper(node, size).result;
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

const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

// O(n) time and O(1) space
const sumLists = (first, second) => {
  const result = new LinkedList();
  let carry = 0;
  let p1 = first.head;
  let p2 = second.head;

  while (p1 || p2) {
    const sum = carry + (p1?.value || 0) + (p2?.value || 0);
    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    result.append(digit);

    p1 = p1?.next;
    p2 = p2?.next;
  }

  while (carry > 0) {
    result.append(carry % 10);
    carry = Math.floor(carry / 10);
  }

  return result;
};

const createListFromNumber = (n) => {
  const result = new LinkedList();

  if (n < 0) return null;

  while (n > 0) {
    result.append(n % 10);
    n = Math.floor(n / 10);
  }

  return result;
};

// TESTS

const firstResult = sumLists(
  createListFromNumber(978),
  createListFromNumber(685)
);

console.log('Input: (8 -> 7 -> 9) + (5 -> 8 -> 6), 978 + 685');
prettyPrintList(firstResult);

const secondResult = sumLists(
  createListFromNumber(978),
  createListFromNumber(32)
);

console.log('Input: (8 -> 7 -> 9) + (2 -> 3), 978 + 32');
prettyPrintList(secondResult);

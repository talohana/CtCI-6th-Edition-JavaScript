const LinkedList = require('../util/LinkedListX');
const prettyPrintList = require('../util/prettyPrintList');

const sumLists = (first, second) => {
  return sumListsRecursion(first.head, second.head);
};

const sumListsRecursion = (p1, p2, carry = 0, result = new LinkedList()) => {
  if (p1 && p2) {
    const sum = carry + p1.value + p2.value;
    result.append(sum % 10);

    return sumListsRecursion(p1.next, p2.next, Math.floor(sum / 10), result);
  } else if (p1) {
    const sum = carry + p1.value;
    result.append(sum % 10);

    return sumListsRecursion(p1.next, p2, Math.floor(sum / 10), result);
  } else if (p2) {
    const sum = carry + p2.value;
    result.append(sum % 10);

    return sumListsRecursion(p1, p2.next, Math.floor(sum / 10), result);
  } else if (carry > 0) {
    result.append(carry % 10);

    return sumListsRecursion(p1, p2, Math.floor(carry / 10), result);
  } else {
    return result;
  }
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

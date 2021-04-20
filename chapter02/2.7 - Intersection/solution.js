const listSize = (node) => {
  let size = 0;

  while (node) {
    node = node.next;
    size++;
  }

  return size;
};

// O(A + B) time and O(1) space
const intersection = (l1, l2) => {
  const A = listSize(l1);
  const B = listSize(l2);

  let p1 = A > B ? l1 : l2; // longer linked list
  let p2 = A > B ? l2 : l1; // shorter linked list

  for (let i = 0; i < Math.abs(A - B); i++) {
    p1 = p1.next;
  }

  while (p1) {
    if (p1 === p2) {
      return p1;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return null;
};

// TESTS

const l1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

const l2 = {
  value: 4,
  next: {
    value: 5,
    next: l1.next.next,
  },
};

console.log(intersection(l1, l2));

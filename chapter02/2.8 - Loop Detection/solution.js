const loopDetection = (head) => {
  if (!head) return null;

  let slow = head;
  let fast = head;

  // Detect if cycle exist
  do {
    fast = fast.next;
    slow = slow.next;

    if (!fast || !fast.next) return null;

    fast = fast.next;
  } while (fast !== slow);

  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};

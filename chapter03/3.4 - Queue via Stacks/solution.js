class QueueViaStacks {
  s1 = [];
  s2 = [];

  add(item) {
    if (this.s1.length === 0) {
      this.reverseTransfer(this.s2, this.s1);
    }

    this.s1.push(item);
  }

  remove() {
    if (this.s2.length === 0) {
      this.reverseTransfer(this.s1, this.s2);
    }

    return this.s2.pop();
  }

  peek() {
    if (this.s2.length === 0) {
      this.reverseTransfer(this.s1, this.s2);
    }

    return this.s2[this.s2.length - 1];
  }

  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }

  reverseTransfer(source, target) {
    while (source.length) {
      target.push(source.pop());
    }
  }
}

// TESTS

const queue = new QueueViaStacks();

queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue);

queue.remove();
console.log(queue);

queue.add(4);
queue.add(5);
console.log(queue);

queue.peek();
console.log(queue);

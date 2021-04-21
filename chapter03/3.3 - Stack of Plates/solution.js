class StackOfPlates {
  threshold = 1;
  stacks = []; // Stack of stacks

  constructor(threshold) {
    this.threshold = threshold;
  }

  push(value) {
    if (this.isEmpty()) {
      this.stacks.push([value]);
    } else {
      const lastStack = this.getLastStack();

      if (lastStack.length === this.threshold) {
        this.stacks.push([value]); // Add a new "Plate"
      } else {
        lastStack.push(value); // Add to last plate
      }
    }
  }

  pop() {
    const lastStack = this.getLastStack();
    const value = lastStack.pop();

    if (lastStack.length === 0) {
      this.stacks.pop();
    }

    return value;
  }

  popAt(index) {
    if (index < 0 || index > this.stacks.length - 1) {
      throw new Error('Out of bounds');
    }

    const stackAtI = this.stacks[index];
    const lastStack = this.getLastStack();
    const value = stackAtI.pop();

    for (let i = index; i < this.stacks.length - 1; i++) {
      this.stacks[i].push(this.stacks[i + 1].shift()); // Propagate later values
    }

    if (lastStack.length === 0) {
      this.stacks.pop();
    }

    return value;
  }

  isEmpty() {
    return this.stacks.length === 0;
  }

  getLastStack() {
    return this.stacks[this.stacks.length - 1];
  }
}

// TESTS

const stackOfPlates = new StackOfPlates(2);

for (let i of [1, 2, 3, 4, 5]) {
  stackOfPlates.push(i);
}

stackOfPlates.pop();
stackOfPlates.popAt(0);

// Should end with two stacks - [1, 3] and [4]
console.log(stackOfPlates.stacks);

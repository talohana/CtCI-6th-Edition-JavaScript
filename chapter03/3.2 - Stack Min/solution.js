class StackMin {
  data = [];
  min = [];

  push(value) {
    if (this.min.length === 0) {
      this.min.push(value);
    } else {
      const currentMin = this.minimum();
      this.min.push(Math.min(value, currentMin));
    }
    this.data.push(value);
  }

  pop() {
    this.min.pop();
    return this.data.pop();
  }

  minimum() {
    return this.min[this.min.length - 1];
  }
}

// TESTS

const stackMin = new StackMin();

stackMin.push(1);
stackMin.push(2);
stackMin.push(3);

console.log(stackMin.minimum());

stackMin.pop();
stackMin.push(0);

console.log(stackMin.minimum());

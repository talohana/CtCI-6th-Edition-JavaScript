const top = (stack) => stack[stack.length - 1];

const sortStack = (stack) => {
  const temp = [];

  while (stack.length) {
    const currentElement = stack.pop();

    while (temp.length && top(temp) > currentElement) {
      stack.push(temp.pop());
    }

    temp.push(currentElement);
  }

  while (temp.length) {
    stack.push(temp.pop());
  }
};

// const sortStack = (stack) => {
//   const size = stack.length;
//   const temp = [];

//   for (let i = 0; i < size; i++) {
//     let biggest = top(stack);
//     let skipped = false;

//     // Find the (s - i)th element
//     for (let j = 0; j < size - i; j++) {
//       biggest = Math.max(biggest, top(stack));
//       temp.push(stack.pop());
//     }

//     // Place the (s - i)th element
//     stack.push(biggest);

//     // Recover and skip
//     while (temp.length) {
//       if (top(temp) === biggest && !skipped) {
//         temp.pop();
//         skipped = true;
//       } else {
//         stack.push(temp.pop());
//       }
//     }
//   }
// };

// TESTS

const s1 = [1, 5, 2, 3, 0, 4];
sortStack(s1);
console.log(s1);

const s2 = [2, 2, 2, 4, 5, 0];
sortStack(s2);
console.log(s2);

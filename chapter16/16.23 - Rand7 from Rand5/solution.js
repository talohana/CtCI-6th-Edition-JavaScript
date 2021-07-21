function rand5() {
  // [0, 4]
  return Math.floor(Math.random() * 5);
}

function rand7() {
  /*   const options = {
    0: [0, 1, 2, 3, 4],
    1: [5, 6],
  };

  let first = rand5();
  let second = rand5();

  while (!(first in options && second in options[first])) {
    first = rand5();
    second = rand5();
  }

  return options[first][second]; */

  /* Easier approach by generating two numbers at base 5 and discarding out of bounds */

  while (true) {
    const num = 5 * rand5() + rand5();

    if (num < 21) {
      return num & 7;
    }
  }
}

// TESTS

for (let i = 0; i < 10; i++) {
  console.log(rand7());
}

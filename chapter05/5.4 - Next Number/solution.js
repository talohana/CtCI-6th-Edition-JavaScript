const nextNumber = (num) => {
  const getNext = (num) => {
    let c0 = 0;
    let c1 = 0;
    let temp = num;

    while ((temp & 1) === 0 && temp !== 0) {
      c0++;
      temp >>= 1;
    }

    while ((temp & 1) === 1) {
      c1++;
      temp >>= 1;
    }

    const p = c0 + c1;

    if (p >= 31 || p === 0) return -1; // ERROR

    num |= 1 << p; // flip zero to one
    num &= ~((1 << p) - 1); // zero indices 0...(p - 1)
    num |= (1 << (c1 - 1)) - 1; // restore (c1 - 1) ones at the beginning of the number

    return num;
  };

  const getPrev = (num) => {
    let c = num;
    let c0 = 0;
    let c1 = 0;

    while ((c & 1) === 1) {
      c1++;
      c >>= 1;
    }

    if (c === 0) return -1; // ERROR

    while ((c & 1) === 0 && c !== 0) {
      c0++;
      c >>= 1;
    }

    const p = c0 + c1;

    num &= ~0 << (p + 1);

    const mask = (1 << (c1 + 1)) - 1;
    num |= mask << (c0 - 1);

    return num;
  };

  console.log('Next:', getNext(num).toString(2));
  console.log('Prev:', getPrev(num).toString(2));
};

// TESTS

nextNumber(10);

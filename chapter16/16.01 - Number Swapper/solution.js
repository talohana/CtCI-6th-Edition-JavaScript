function numberSwapper(x, y) {
  console.log('Input', x, y);
  if (y > x) {
    x = x - y;
    y = x + y;
    x = y - x;
  } else {
    y = y - x;
    x = y + x;
    y = x - y;
  }

  console.log('Output', x, y);
}

// TESTS

numberSwapper(123, 5467);

numberSwapper(5467, 123);

numberSwapper(-1, 123);

numberSwapper(123, -1);

numberSwapper(0, 0);

numberSwapper(-123, -100);

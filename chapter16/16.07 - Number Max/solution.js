function numberMax(a, b) {
  const flip = x => 1 ^ x;
  const sign = x => flip((x >> 31) & 0x1);

  const c = a - b;

  const sa = sign(a); // if a >= 0 then 1 else 0
  const sb = sign(b); // if b >= 0 then 1 else 0
  const sc = sign(c); // depends whether a - b overflows

  const useSignOfA = sa ^ sb; // if a and b have different sign => use sign of a
  const useSignOfC = flip(sa ^ sb); // if a and b have the same sign => use sign of c

  const k = useSignOfA * sa + useSignOfC * sc;
  const q = flip(k);

  return a * k + b * q;
}

// TESTS

console.log(numberMax(2, 5));
console.log(numberMax(5, 2));
console.log(numberMax(-3, -7));
console.log(numberMax(0, -7));
console.log(numberMax(-15, 32));

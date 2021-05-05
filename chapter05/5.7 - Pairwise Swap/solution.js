const pairwiseSwap = (n) => {
  return ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
};

console.log((128).toString(2), pairwiseSwap(128).toString(2));

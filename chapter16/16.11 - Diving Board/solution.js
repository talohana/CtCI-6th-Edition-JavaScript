function generateLengths(k, shorter, longer) {
  let currentLength = k * shorter;
  const lengths = [currentLength];

  for (let i = 0; i < k; i++) {
    currentLength -= shorter;
    currentLength += longer;
    lengths.push(currentLength);
  }

  return lengths;
}

// TETS

console.log(generateLengths(3, 2, 4));
console.log(generateLengths(8, 3, 4));

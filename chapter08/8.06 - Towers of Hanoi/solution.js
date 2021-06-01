const range = n =>
  Array(n)
    .fill(null)
    .map((_, i) => i + 1);

const towersOfHanoi = n => {
  const rods = [range(n), [], []];

  const moveTop = (startRod, endRod) => endRod.push(startRod.pop());

  const moveDisks = (n, startRod, endRod, bufferRod) => {
    if (n <= 0) return;

    moveDisks(n - 1, startRod, bufferRod, endRod);

    moveTop(startRod, endRod);

    moveDisks(n - 1, bufferRod, endRod, startRod);
  };

  // (disks, origin, destination, buffer)
  moveDisks(n, rods[0], rods[2], rods[1]);

  return rods;
};

// TESTS

console.log('n = 3', JSON.stringify(towersOfHanoi(3)));
console.log('n = 15', JSON.stringify(towersOfHanoi(15)));

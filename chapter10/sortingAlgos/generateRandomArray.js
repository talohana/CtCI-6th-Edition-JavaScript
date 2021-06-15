const generateRandomNumber = (low, high) =>
  low + Math.round(Math.random() * (high - low));

exports.generateRandomArray = (n = 10, low = 0, high = 15) => {
  return Array(n)
    .fill(null)
    .map(() => generateRandomNumber(low, high));
};

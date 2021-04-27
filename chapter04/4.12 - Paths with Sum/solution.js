const countPathsWithSum = (root, targetSum) => {};

const countPathsWithSumHelper = (node, targetSum, runningSum, pathCount) => {
  if (node === null) return 0;

  runningSum += node.data;
  const sum = runningSum - targetSum;
  const totalPaths = pathCount[sum] || 0;

  if (runningSum === targetSum) {
    totalPaths++;
  }

  incrementHashTable(pathCount, runningSum, 1);
  totalPaths += countPathsWithSumHelper(
    node.left,
    targetSum,
    runningSum,
    pathCount
  );
  totalPaths += countPathsWithSumHelper(
    node.right,
    targetSum,
    runningSum,
    pathCount
  );
  incrementHashTable(pathCount, runningSum, -1);

  return totalPaths;
};

const incrementHashTable = (hashTable, key, delta) => {
  const newCount = hashTable[key] || 0 + delta;
  if (newCount === 0) delete hashTable[key];
  else hashTable[key] = newCount;
};

function contiguousSequence(nums) {
  if (nums.length === 0) return 0;

  let maxSum = 0;
  let runningSum = 0;

  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];

    if (runningSum > maxSum) {
      maxSum = runningSum;
    } else if (runningSum < 0) {
      runningSum = 0;
    }
  }

  return maxSum;
}

// TESTS

console.log(contiguousSequence([2, -8, 3, -2, 4, -10]));
console.log(contiguousSequence([-10, -10, -10]));
console.log(contiguousSequence([1, 2, 3]));
console.log(contiguousSequence([1, 2, 3, -50]));
console.log(contiguousSequence([0]));

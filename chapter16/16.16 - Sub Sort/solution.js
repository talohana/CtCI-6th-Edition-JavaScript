function subSort(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) left++;
  while (right >= 0 && arr[right] >= arr[right - 1]) right--;

  /* The array is sorted */
  if (right === 0) return [0, 0];

  let start = left;
  let end = right;

  while (start > 0 && arr[start - 1] > arr[right]) start--;
  while (end < arr.length - 1 && arr[end + 1] < arr[left]) end++;

  return [start, end];
}

console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
console.log(subSort([1, 2, 3, 5, 6, 7]));
console.log(subSort([5, 6, 7, 1, 2, 3]));
console.log(subSort([7, 6, 5, 4, 3, 2, 1]));

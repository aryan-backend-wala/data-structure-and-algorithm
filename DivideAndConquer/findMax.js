function findMax(arr, left, right) {
  if (left === right) {
    return arr[left]; // Base case: only one element
  }

  const mid = Math.floor((left + right) / 2);

  // Recursive calls
  const maxLeft = findMax(arr, left, mid);
  const maxRight = findMax(arr, mid + 1, right);

  // Combine step
  return Math.max(maxLeft, maxRight);
}

// Example usage:
const arr = [3, 5, 9, 1, 6, 8, 2];
console.log(findMax(arr, 0, arr.length - 1)); // Output: 9

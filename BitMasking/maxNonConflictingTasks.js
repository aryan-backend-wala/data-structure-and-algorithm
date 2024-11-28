function maxNonConflictingTasks(n, constraints) {
  const conflictMatrix = Array.from({ length: n }, () => Array(n).fill(false));

  // Fill conflict matrix
  for (const [task1, task2] of constraints) {
    conflictMatrix[task1][task2] = true;
    conflictMatrix[task2][task1] = true;
  }

  let maxTasks = 0;

  // Check all subsets
  for (let mask = 0; mask < (1 << n); mask++) {
    let isValid = true;

    // Check all pairs in the current subset
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        for (let j = i + 1; j < n; j++) {
          if (mask & (1 << j) && conflictMatrix[i][j]) {
            isValid = false;
            break;
          }
        }
      }
      if (!isValid) break;
    }

    if (isValid) {
      maxTasks = Math.max(maxTasks, countSetBits(mask));
    }
  }

  return maxTasks;
}

function countSetBits(mask) {
  let count = 0;
  while (mask) {
    count += mask & 1;
    mask >>= 1;
  }
  return count;
}

// Example Input
const n = 5;
const constraints = [
  [0, 1], // Task 1 conflicts with Task 2
  [2, 3], // Task 3 conflicts with Task 4
];

console.log(maxNonConflictingTasks(n, constraints)); // Output: 3

function knapsackRecursive(weights, values, capacity, n) {
  if (n === 0 || capacity === 0) return 0;

  if (weights[n - 1] > capacity) {
    return knapsackRecursive(weights, values, capacity, n - 1);
  }

  return Math.max(
    values[n - 1] + knapsackRecursive(weights, values, capacity - weights[n - 1], n - 1),
    knapsackRecursive(weights, values, capacity, n - 1)
  );
}

function knapsackDP(weights, values, capacity) {
  let n = weights.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] > w) {
        dp[i][w] = dp[i - 1][w];
      } else {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      }
    }
  }
  console.log(dp);
  return dp[n][capacity];
}

let weights = [1, 2, 3];
let values = [1, 6, 10];
let capacity = 3;
console.log(knapsackDP(weights, values, capacity));
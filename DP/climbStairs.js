function climbStairs(n) {
  if (n <= 1) return 1;

  return climbStairs(n - 1) + climbStairs(n - 2)
}

function climbStairsDP(n, memo = {}) {
  if (n <= 1) {
    return 1
  }

  if (n in memo) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)

  return memo[n];
}

function climbStairsTab(n) {
  if (n <= 1) return 1

  const result = [];
  result[0] = 1;
  result[1] = 1;

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }

  return result[n]
}

function climbStairsOptimized(n){
  if(n<=1) return 1;
  let prev1 = 1, prev2 = 1;

  for(let i=2;i<=n;i++){
    let curr = prev1 + prev2
    prev2 = prev1;
    prev1 = curr
  }

  return prev1
}

console.log(climbStairsOptimized(5))
function fibonacci(n) {
  if(n === 0 || n === 1){
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2); 
}

// better fibonacci with memoization

function fiboWithMemo(n, memo={}){
  if(n === 0 || n === 1){
    return n
  }
  
  if(memo[n] !== undefined){
    return memo[n]
  }
  
  memo[n] = fiboWithMemo(n - 1, memo) + fiboWithMemo(n - 2, memo);

  return memo[n]
}

// better fibonacci with dynamic programming

function fiboWithDP(n){
  const fib = [];
  fib[0] = 0
  fib[1] = 1

  for(let i=2;i<=n;i++){
    fib[i] = fib[i-1] + fib[i-2];
  }

  return fib[n]
}

// console.log('fib with simple recursion ', fibonacci(5))
// console.log('fib with recursion using memo ', fiboWithMemo(5))
// console.log('fib with simple dp ', fiboWithDP(5))
const n = 60;
let start = new Date().getTime();
fiboWithMemo(n);
let end = new Date().getTime();
let diff = end - start
console.log(`fib with memo has taken time ${diff} ms`)
start = new Date().getTime();
fiboWithDP(n);
end = new Date().getTime();
diff = end - start
console.log(`fib with dp has taken time ${diff} ms`)


// fibonacci numbers: 0, 1, 1, 2, 3, 5, 8
// 3rd -> 1
// base case should be 0 and 1 means return 0 or 1
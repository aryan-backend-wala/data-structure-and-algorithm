function factorial(n) {
  if(n === 0 || n === 1) return 1

  return n * factorial(n - 1)
}

console.log(factorial(3))

// 5 x 4 x 3 x 2 x 1 
// 0! = 1
// if 0, 1 then return 1
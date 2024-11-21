function countingBits(n) {
  let count = 0;
  while(n > 0) {
    count += n & 1
    n >>= 1
  }
  return count
}
function countSetBitsOptimized(n){
  let count = 0;
  while(n > 0){
    n = n & (n - 1);
    count++
  }
  return count
}

// console.log(countingBits(8))
// console.log('new')
// console.log(countSetBitsOptimized(8))

function countBits(n){
  let count = 0;
  while(n){
    n = n & (n - 1)
    count++
  }
  console.log(count)
}

countBits(7)
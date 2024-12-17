const n = 5;
var countBits = function (n) {
  const ans = [];
  for (let i = 0; i <= n; i++) {
    ans.push(countOnes(i))
  }
  return ans
};

function countOnes(num) {
  let count = 0;
  while(num > 0){
    num &= num - 1;
    count++
  }
  return count;
}

countBits(n)

function log(msg){
  if(msg === undefined) return ""
  console.log(msg)
}

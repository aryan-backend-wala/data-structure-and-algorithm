let nums = [2, 2, 3, 3, 1]
let s = "abcd", t = "abcde"

function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

function sumInArray(nums) {
  if (nums.length <= 0) return 0;
  else return nums[nums.length - 1] + sum(nums.slice(0, nums.length - 1))
}

function sumArray(nums){
  if(nums.length === 0) return 0
  return nums[0] + sumArray(nums.slice(1))
}

function sum(n){
  if(n === 0) return 0
  return n + sum(n - 1)
}


function reverseString(str) {
  if (str.length <= 0) return ""
  return str[str.length - 1] + reverseString(str.split('').slice(0, str.length - 1).join(''))
}

function reverseString1(str){
  if(str === '') return "";
  return str.charAt(str.length - 1) + reverseString1(str.slice(0, -1))
}

function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}

function subsets(nums) {
  let result = []
  let mask = 1 << nums.length
  for (let i = 0; i < mask; i++) {
    let arr = []
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        arr.push(nums[j])
      }
    }
    result.push(arr)
  }
  return result
}

function getPermutations(str){
  if(str.length <= 1) {
    return [str]
  } 
  let permutations = []
  for(let i=0;i<str.length;i++){
    let char = str[i]
    if(str.indexOf(char) !== i) continue
    let remainingChars = str.slice(0, i) + str.slice(i+1)
    for(let permutation of getPermutations(remainingChars)){
      permutations.push(char + permutation)
    }
  }
  return permutations
}

console.log(getPermutations('abc'));

function countBits(n) {
  let count = 0;
  while (n > 0) {
    n >>= 1
    count++
  }
  return count;
}


function log(msg) {
  if (msg === undefined) return ""
  console.log(msg)
}

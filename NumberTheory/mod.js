function mod(a, b){
  return ((a % b) + b) % b;
}

function modArray(arr, m){
  return arr.map((num) => ((num % m) + m) % m)
}

console.log(mod(23, 5))
console.log(mod(-23, 5))
console.log(modArray([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4], 4))
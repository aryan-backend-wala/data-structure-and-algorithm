function sumOfDigits(n){
  return String(n).split("").map(Number).reduce(((sum, curr) => sum + curr), 0)
}

function sumOfDigitsByRecursion(n){
  if(n === 0){
    return 0;
  }
  
  return (n % 10) + sumOfDigitsByRecursion(Math.floor(n / 10))
}

console.log(sumOfDigitsByRecursion(999999));
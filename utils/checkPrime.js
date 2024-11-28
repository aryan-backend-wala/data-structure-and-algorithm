function checkPrime(num) {
  let flag = true
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      flag = false;
      break
    }
  }
  return flag
}

function checkPrime1(num, div = 2) {
  if (num <= 1) {
    return false
  }
  if (div > Math.sqrt(num)) {
    return true
  }

  if (num % div === 0) {
    return false
  }
  else {
    return checkPrime1(num, div + 1)
  }
}

function display(num, func) {
  if (func(num)) {
    console.log(num + ' is Prime')
  } else {
    console.log(num + ' is not Prime')
  }
}

function checkPrimeP(num) {
  // a ^ p - 1 = mod p = 1
  if ((Math.pow(2, num - 1) % num) === 1) {
    return true
  }
  return false;
}

function generatePrime(n) {
  // (n ^ 2 - n) + 41
  return (Math.pow(n, 2) - n) + 41
}


// for (let i = 1; i <= 100; i++) {
//   let curr = generatePrime(i);
//   let prev = generatePrime(i - 1);
//   console.log(`Number ${i} is ${curr} and diff is ${curr - prev} and it is ${checkPrime1(curr) ? 'Prime' : 'not Prime'} and divisors are ${generateDivisor(curr).join(', ')}`)
//   // console.log()
// }
const n = 10000000
const perfectNumber = []
const deficientNumber = []
const abundantNumber = []
const semiprimeNumbers = []
for (let i = 1; i <= n; i++) {
  let arr = generateDivisorOptimized(i)
  // if (arr.length === 4) {
  //   semiprimeNumbers.push(i)
  // }
  checkPAD(i, arr)
}

console.log(`Perfect Numbers are len = ${perfectNumber.length} ratio = ${(perfectNumber.length) / n}`)
console.log(`Deficient Numbers are len = ${deficientNumber.length} ratio = ${(deficientNumber.length) / n}`)
console.log(`Abundant Numbers are len = ${abundantNumber.length} ratio = ${(abundantNumber.length) / n}`)
console.log(`Sum = ${perfectNumber.length} + ${deficientNumber.length} + ${abundantNumber.length} = ${perfectNumber.length + deficientNumber.length + abundantNumber.length} = ${n}`)
// console.log(`SemiPrime Numbers are ${semiprimeNumbers.join(', ')}, len = ${semiprimeNumbers.length}`)

function generateDivisor(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result
}

function generateDivisorOptimized(n) {
  const result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i); // Add the divisor
      if (i !== n / i) { // Avoid duplicate for perfect squares
        result.push(n / i); // Add the paired divisor
      }
    }
  }
  return result.sort((a, b) => a - b); // Optional: Sort divisors in ascending order
}


function checkPAD(n, arr) {
  const sum = arr.slice(0, arr.length - 1).reduce((sum, curr) => sum + curr, 0);
  if (sum === n) {
    perfectNumber.push(n)
  }
  else if (sum < n) {
    deficientNumber.push(n)
  }
  else {
    abundantNumber.push(n)
  }
}

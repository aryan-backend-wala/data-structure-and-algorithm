function mersennePrime(n) {
  return (2 ** n) - 1
}

const n = 31;
let count = 0;

for (let i = 1; i <= n; i++) {
  const mersenne = mersennePrime(i);
  const check = checkPrime(mersenne);
  if (check) {
    count++
  }
  console.log(`n = ${i}, mersenne = ${mersenne} and it is ${check ? 'prime' : 'not prime'}`)
}

console.log(`Prime count = ${count}`)

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
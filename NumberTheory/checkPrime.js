function checkPrime(n){

  if(n === 2) {
    return true;
  }

  if(n <= 1 || (n % 2 === 0)){
    return false;
  }

  for(let i=2;i<=Math.sqrt(n);i++){
    if(n % i === 0) return false
  }

  return true;
}

for(let i=1;i<=20;i++){
  console.log(`${i} is ${checkPrime(i) ? 'prime' : 'not prime'}`)
}
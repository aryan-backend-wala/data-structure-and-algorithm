function findingFactor(n){
  const square = n ** 2;
  for(let i=1;i<n;i++){
    let diffM = (n - i) * (n + i);
    console.log(`${square} - ${square - diffM} = ${diffM} = (${n} - ${i}) x (${n} + ${i}), factors are ${generateDivisorOptimized(diffM).join(', ')} = ${(n - i) * (n + i)}`)
  }
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
  const newResult = result.sort((a, b) => a - b);
  const mid = newResult.length / 2
  return [newResult[mid - 1], newResult[mid]]; // Optional: Sort divisors in ascending order
}

findingFactor(20);
// console.log(generateDivisorOptimized(141))
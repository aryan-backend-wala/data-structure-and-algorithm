function findMaximumXOR(nums) {
  let maxXOR = 0;
  let mask = 0;

  for(let i=4;i>=0;i--){
    mask |= (1 << i);
    console.log(`Mask ${mask} and MaxXOR ${maxXOR}`)
    let prefixes = new Set();

    for(let num of nums) {
      console.log(`num and mask | ${num} | ${mask} = ${num & mask}`)
      prefixes.add(num & mask)
    }

    let candidateXOR = maxXOR | (1 << i);
    console.log(`candidateXOR ${candidateXOR}`)
    for(let prefix of prefixes){
      console.log(prefixes.has(prefix ^ candidateXOR))
      if(prefixes.has(prefix ^ candidateXOR)){
        maxXOR = candidateXOR;
        break;
      }
    }
    console.log(prefixes, i)
  }

  return maxXOR
}

const nums = [3, 10, 5, 25, 2, 8];
console.log(findMaximumXOR(nums));``
import { decimal2Binary } from "../utils/decimalToBinary.js";

function findMaximumXOR(nums) {
  let maxXOR = 0;
  let mask = 0;

  for(let i=4;i>=0;i--){
    mask |= (1 << i);
    console.log(`Mask ${mask} and MaxXOR ${maxXOR}`)
    let prefixes = new Set();

    for(let num of nums) {
      console.log(`num and mask | ${num} ${decimal2Binary(num)} | ${mask} = ${num & mask}`)
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

const nums = [1, 1, 2, 2, 1, 3];
console.log(findMaximumXOR(nums));

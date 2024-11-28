function generatePermutations(nums) {
  const result = [];

  function backtrack(start) {
    console.log('Start Backtrack: start= ', start); 
    if (start === nums.length) {
      result.push([...nums]); // Add a copy of the current permutation
      console.log(`start = ${nums.length}, result = ${nums}`)
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
      console.log(`swap (nums[${start}], nums[${i}) = (${nums[start]}, ${nums[i]})`)
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Undo swap (backtrack)
      console.log(`undo swap (nums[${start}], nums[${i}) = (${nums[start]}, ${nums[i]})`)
    }
    console.log('End Backtrack: start = ', start); 
  } 
  backtrack(0);
  return result;
}

function generatePermutationsMe(nums) {
  const result = [];

  function backtrack(start) {
    if(start === nums.length){
      result.push([...nums])
      return
    } 

    for(let i=start;i<nums.length;i++){
      [nums[start], nums[i]] = [nums[i], nums[start]]
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]]
    }
  }

  backtrack(0);

  return result
}

generatePermutations([1, 2, 3])
console.log(generatePermutationsMe([1, 2, 3])); 

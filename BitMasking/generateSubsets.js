function generateSubsets(set) {
  let n = set.length;
  const subsets = [];

  for(let mask=0;mask < (1 << 3);mask++){
    const subset = [];
    for(let i=0;i<n;i++){
      if(mask & (1 << i)){
        subset.push(set[i])
      }
    }
    subsets.push(subset)
  }
  return subsets
}

function findSubsetsWithTargetSum(nums, target) {
  const result = [];
  const n = nums.length;

  for(let mask=0;mask < (1 << n);mask++){
    const subset = [];
    let sum = 0;

    for(let i=0;i<n;i++){
      if(mask & (1 << i)){
        subset.push(nums[i])
        sum += nums[i];
      }
    }

    if(target === sum){
      result.push(subset)
    }
  }
  return result;
}

const set = [1, 2, 3, 4, 5];
// console.log(generateSubsets(set));
for(let i=1;i<=10;i++){
  console.log(findSubsetsWithTargetSum(set, i), 'Sum ' + i)
}

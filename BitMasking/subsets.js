var subsets = function (nums) {
  const subsets = [];
  const n = nums.length;

  for (let mask = 0; mask < (1 << n); mask++) {
    const subset = [];

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(nums[i]);
      }
    }
    subsets.push(subset)
  }
  return subsets;
};

var subsets1 = function (nums) {
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    let length = result.length
    for (let j = 0; j < length; j++) {
      result.push([...result[j], nums[i]])
    }
  }
  return result
};

var subsets2 = function (nums) {
  const result = [];

  const backtrack = (currentSubset, index) => {
    console.log(`Calling backtrack with: currentSubset = [${currentSubset.join(", ")}], index = ${index} length = ${currentSubset.length}`);
    result.push([...currentSubset]);
    console.log(`Added subset to result: [${currentSubset.join(", ")}], Current result = ${JSON.stringify(result)}`);

    for (let i = index; i < nums.length; i++) {
      console.log(`Considering element nums[${i}] = ${nums[i]}`);

      // Choose
      currentSubset.push(nums[i]);
      console.log(`After adding nums[${i}] = ${nums[i]}: currentSubset = [${currentSubset.join(", ")}]`);

      // Explore
      backtrack(currentSubset, i + 1);

      // Un-choose
      console.log(`Backtracking: Removing nums[${i}] = ${nums[i]} from currentSubset`);
      currentSubset.pop();
    }
  };

  console.log("Starting Backtracking...");
  backtrack([], 0);
  return result;
};

const nums = [1];
subsets2(nums)

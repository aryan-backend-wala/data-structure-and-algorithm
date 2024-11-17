function findMedianSortedArrays(arr1, arr2) {
  const newArr = arr1.concat(arr2).sort((a, b) => a - b)
  const length = newArr.length;
  if (length % 2 === 0) {
    const left = newArr[(length / 2) - 1]
    const right = newArr[length / 2]
    return (left + right) / 2
  } else {
    const middle = newArr[Math.floor(length / 2)]
    return middle
  }
}

var findMedianSortedArrays1 = function (nums1, nums2) {
  console.log(`Starting findMedianSortedArrays1`);
  console.log(`Input Array 1: ${nums1}`);
  console.log(`Input Array 2: ${nums2}`);

  let totalLength = nums1.length + nums2.length;
  if (totalLength === 0) {
    console.log("Both arrays are empty. Returning 0.");
    return 0;
  }

  let iterationLength = totalLength % 2 === 0 ? totalLength / 2 + 1 : (totalLength + 1) / 2;
  console.log(`Total length of arrays: ${totalLength}`);
  console.log(`Number of iterations required: ${iterationLength}`);

  let i = 0, m = 0, n = 0;
  let prevValue = 0, curValue = 0;

  for (i = 0; i < iterationLength; i++) {
    prevValue = curValue;
    console.log(`Iteration ${i + 1}: prevValue=${prevValue}, curValue=${curValue}, m=${m}, n=${n}`);

    if (m in nums1 && n in nums2) {
      if (nums1[m] < nums2[n]) {
        curValue = nums1[m];
        console.log(`nums1[${m}] (${nums1[m]}) < nums2[${n}] (${nums2[n]}), updating curValue to ${curValue}`);
        m++;
      } else {
        curValue = nums2[n];
        console.log(`nums2[${n}] (${nums2[n]}) <= nums1[${m}] (${nums1[m]}), updating curValue to ${curValue}`);
        n++;
      }
    } else if (m in nums1) {
      curValue = nums1[m];
      console.log(`Only nums1[${m}] (${nums1[m]}) is valid, updating curValue to ${curValue}`);
      m++;
    } else {
      curValue = nums2[n];
      console.log(`Only nums2[${n}] (${nums2[n]}) is valid, updating curValue to ${curValue}`);
      n++;
    }
  }

  console.log(`Final values after iterations: prevValue=${prevValue}, curValue=${curValue}`);
  if (iterationLength === 1) {
    console.log(`Iteration length is 1. Median is ${curValue}`);
    return curValue;
  }

  let median = totalLength % 2 === 0 ? (prevValue + curValue) / 2 : curValue;
  console.log(`Total length is ${totalLength % 2 === 0 ? 'even' : 'odd'}. Median is ${median}`);
  return median;
};

var findMedianSortedArrays2 = function (nums1, nums2) {
  console.log("Starting findMedianSortedArrays2");
  console.log(`Input Array 1: ${nums1}`);
  console.log(`Input Array 2: ${nums2}`);

  const merged = [];
  let i = 0, j = 0;

  console.log("Merging arrays...");
  while (i + j < nums1.length + nums2.length) {
    if (nums1[i] === undefined) {
      console.log(`nums1[${i}] is undefined. Pushing nums2[${j}] (${nums2[j]}) to merged array.`);
      merged.push(nums2[j]);
      j++;
    } else if (nums2[j] === undefined) {
      console.log(`nums2[${j}] is undefined. Pushing nums1[${i}] (${nums1[i]}) to merged array.`);
      merged.push(nums1[i]);
      i++;
    } else if (nums1[i] <= nums2[j]) {
      console.log(`nums1[${i}] (${nums1[i]}) <= nums2[${j}] (${nums2[j]}). Pushing nums1[${i}] to merged array.`);
      merged.push(nums1[i]);
      i++;
    } else {
      console.log(`nums1[${i}] (${nums1[i]}) > nums2[${j}] (${nums2[j]}). Pushing nums2[${j}] to merged array.`);
      merged.push(nums2[j]);
      j++;
    }
    console.log(`Merged array so far: ${merged}`);
  }

  console.log("Merging complete. Final merged array:", merged);

  if (merged.length % 2 === 0) {
    const mid1 = merged.length / 2 - 1;
    const mid2 = merged.length / 2;
    console.log(`Merged array length is even. Returning average of merged[${mid1}] (${merged[mid1]}) and merged[${mid2}] (${merged[mid2]})`);
    return (merged[mid1] + merged[mid2]) / 2;
  }

  const medianIndex = Math.floor(merged.length / 2);
  console.log(`Merged array length is odd. Returning merged[${medianIndex}] (${merged[medianIndex]})`);
  return merged[medianIndex];
};

function findMedianSortedArrays3(arr1, arr2) {
  console.log("Starting findMedianSortedArrays3");
  console.log(`Input Array 1: ${arr1}`);
  console.log(`Input Array 2: ${arr2}`);

  const totalLength = arr1.length + arr2.length;
  console.log(`Total length of merged arrays: ${totalLength}`);

  // Helper function to find the k-th smallest element
  function findKthElement(arr1, arr2, k) {
    console.log(`\nFinding ${k}-th smallest element`);
    console.log(`Current Array 1: ${arr1}`);
    console.log(`Current Array 2: ${arr2}`);

    // Base cases
    if (arr1.length === 0) {
      console.log(`Array 1 is empty. Returning ${k}-th element from Array 2: ${arr2[k - 1]}`);
      return arr2[k - 1];
    }
    if (arr2.length === 0) {
      console.log(`Array 2 is empty. Returning ${k}-th element from Array 1: ${arr1[k - 1]}`);
      return arr1[k - 1];
    }
    if (k === 1) {
      console.log(`k is 1. Returning the minimum of Array 1[0] (${arr1[0]}) and Array 2[0] (${arr2[0]}): ${Math.min(arr1[0], arr2[0])}`);
      return Math.min(arr1[0], arr2[0]);
    }

    // Compare elements at the mid-points of each array
    const mid1 = Math.min(Math.floor(k / 2), arr1.length);
    const mid2 = Math.min(Math.floor(k / 2), arr2.length);
    console.log(`Comparing Array 1[mid1-1] (${arr1[mid1 - 1] || "undefined"}) with Array 2[mid2-1] (${arr2[mid2 - 1] || "undefined"})`);

    if (arr1[mid1 - 1] < arr2[mid2 - 1]) {
      console.log(`Array 1[mid1-1] < Array 2[mid2-1]. Discarding first ${mid1} elements of Array 1 and reducing k by ${mid1}`);
      return findKthElement(arr1.slice(mid1), arr2, k - mid1);
    } else {
      console.log(`Array 2[mid2-1] <= Array 1[mid1-1]. Discarding first ${mid2} elements of Array 2 and reducing k by ${mid2}`);
      return findKthElement(arr1, arr2.slice(mid2), k - mid2);
    }
  }

  // Median for odd or even total length
  if (totalLength % 2 === 1) {
    console.log("Total length is odd. Finding the median as the middle element.");
    const median = findKthElement(arr1, arr2, Math.floor(totalLength / 2) + 1);
    console.log(`Median is: ${median}`);
    return median;
  } else {
    console.log("Total length is even. Finding the median as the average of the two middle elements.");
    const left = findKthElement(arr1, arr2, totalLength / 2);
    const right = findKthElement(arr1, arr2, totalLength / 2 + 1);
    const median = (left + right) / 2;
    console.log(`Median is the average of ${left} and ${right}: ${median}`);
    return median;
  }
}


const arr1 = [1, 2]
const arr2 = [3]
console.log(findMedianSortedArrays3(arr1, arr2))

function findSumOfSquares(n) {
  for (let a = 0; a * a <= n; a++) {
    let bSquared = n - a * a;
    let b = Math.sqrt(bSquared);
    if (Number.isInteger(b)) {
      return [a, b];
    }
  }
  return null; // No such representation exists
}

// console.log(findSumOfSquares(34));

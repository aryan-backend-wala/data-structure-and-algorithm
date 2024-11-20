function assignJobsMinimizeMaxWorkload(jobs, k) {
  const n = jobs.length;
  const dp = Array.from({ length: 1 << n }, () => Array(k + 1).fill(Infinity));

  // Helper function to calculate the workload for a given mask
  function calculateWorkload(mask) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) total += jobs[i];
    }
    return total;
  }

  dp[0][0] = 0;

  console.log("Starting DP computation...");
  for (let mask = 0; mask < (1 << n); mask++) {
    console.log(`Processing mask: ${mask.toString(2).padStart(n, "0")} (Decimal: ${mask})`);
    for (let workers = 1; workers <= k; workers++) {
      console.log(`  Number of workers: ${workers}`);
      let submask = mask;

      while (submask) {
        const workload = calculateWorkload(submask);
        const previousValue = dp[mask][workers];
        const newValue = Math.max(dp[mask ^ submask][workers - 1], workload);

        dp[mask][workers] = Math.min(previousValue, newValue);

        console.log(
          `    Submask: ${submask.toString(2).padStart(n, "0")} (Decimal: ${submask}) | Workload: ${workload} | ` +
          `Previous DP[${mask.toString(2).padStart(n, "0")}][${workers}] = ${previousValue} | ` +
          `New Value: ${newValue}`
        );

        submask = (submask - 1) & mask;
      }
    }
  }

  console.log("Final DP Table:");
  for (let i = 0; i < dp.length; i++) {
    console.log(
      `Mask ${i.toString(2).padStart(n, "0")} (Decimal: ${i}): ${dp[i].map((v) => (v === Infinity ? "∞" : v))}`
    );
  }

  console.log("DP computation completed.");
  console.log(dp)
  return dp[(1 << n) - 1][k];
}

function assignJobsMinimizeMaxWorkload1(jobs, k) {
  const n = jobs.length;
  const dp = Array.from({ length: (1 << n) }, () => Array(k + 1).fill(Infinity))
  
  dp[0][0] = 0;

  function calculateWorkload(mask){
    let total = 0;
    for(let i=0;i<n;i++){
      if(mask & (1 << i)) total += jobs[i]
    }
    
    return total
  }

  for(let mask=0;mask < (1 << n);mask++){
    for(let workers=1;workers<=2;workers++){
      let submask = mask;
      while(submask){
        const workload = calculateWorkload(submask)
        const previousValue = dp[mask][workers]
        const newValue = Math.max(dp[mask ^ submask][workers - 1], workload);
        dp[mask][workers] = Math.min(previousValue, newValue)
        submask = (submask - 1) & mask
      }
    }
  }
  return dp[(1 << n) - 1][k]
}

const jobs = [5, 2, 4];
const k = 2;
console.log(assignJobsMinimizeMaxWorkload1(jobs, k));
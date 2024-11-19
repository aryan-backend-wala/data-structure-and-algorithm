const cost = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];



// A -> B -> C -> D = 10 + 35 = 45 + 30 = 75 + 20 = 95 *
// A -> B -> D -> C = 10 + 25 = 35 + 30 = 65 + 15 = 80 *
// A -> C -> B -> D = 15 + 35 = 50 + 25 = 75 + 20 = 95 * 
// A -> C -> D -> B = 15 + 30 = 45 + 25 = 70 + 10 = 80 *
// A -> D -> B -> C = 20 + 25 = 45 + 35 = 80
// A -> D -> C -> B= 20 + 30 = 50 + 35 = 85
// RESULT
// A -> B -> D -> C -> A = 80

// A -> B -> C -> D = 10 + 35 = 45 + 30 = 75
// A -> B -> D -> C = 10 + 25 = 35 + 30 = 65
// A -> C -> B -> D = 15 + 35 = 50 + 25 = 75 
// A -> C -> D -> B = 15 + 30 = 45 + 25 = 70
// A -> D -> B -> C = 20 + 25 = 45 + 35 = 80
// A -> D -> C -> B = 20 + 30 = 50 + 35 = 85



// 0001 0 = 0
// 0010 10 = 10
// 0011 0 + 10 = 10
// 0100 15 = 15
// 0101 0 + 15 = 15
// 0110 10 + 15 = 25
// 0111 0 + 10 + 15 = 25
// 1000 20 = 20
// 1001 20 + 0 = 20
// 1010 20 + 10 = 30
// 1011 20 + 10 + 0 = 30
// 1100 20 + 15 = 35
// 1101 20 + 15 + 0 = 35
// 1110 20 + 15 + 10 = 45

console.log(tsp(cost));

function tsp(cost) {
  const n = cost.length;
  const dp = Array(1 << n).fill(null)
    .map(() => Array(n).fill(Infinity))
  dp[1][0] = 0;
  for(let mask=1;mask < (1 << n);mask++){
    for(let i=0;i<n;i++){
      if(!(mask & (1 << i))) continue

      for(let j =0;j<n;j++){
        if(mask & (1 << j)) continue;
        console.log(mask, i, j)
        const newMask = mask | (1 << j);
        console.log(`${dp[mask][i]} + ${cost[i][j]} = ${dp[mask][i] + cost[i][j]}`)
        console.log(`newMask = ${newMask}, min (${dp[newMask][j]}, ${dp[mask][i] + cost[i][j]})`)
        dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + cost[i][j])
        console.log(`dp[${newMask}][${j}] = ${dp[newMask][j]},  i ${i}, cost ${cost[i][j]}`)
      }
    }
  }
  console.log(dp)
  let minCost = Infinity;
  for(let i=1;i<n;i++){
    console.log(`${minCost} min(${minCost}, dp[${(1 << n) - 1}][${i}]) + cost[${i}][0]`)
    console.log(`${dp[(1 << n) - 1][i] + cost[i][0]}  ${dp[(1 << n) - 1][i]} + ${cost[i][0]}`)
    minCost = Math.min(minCost, dp[(1 << n) - 1][i] + cost[i][0])
  }

  return minCost
}


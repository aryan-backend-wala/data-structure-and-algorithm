function canCompleteTasks(tasks, numResources) {
  const n = tasks.length;
  const dp = new Map(); // Memoization

  function solve(taskIndex, usedMask) {
    console.log(
      `TaskIndex: ${taskIndex}, UsedMask: ${usedMask} ${usedMask.toString(2).padStart(numResources, "0")}`
    );

    if (taskIndex === n) {
      console.log("All tasks completed successfully!");
      return true; // All tasks completed
    }

    const key = `${taskIndex}-${usedMask}`;
    if (dp.has(key)) {
      console.log(`Found memoized result for Key: ${key}, Result: ${dp.get(key)}`);
      return dp.get(key);
    }

    console.log(`Trying to assign resources for Task[${taskIndex}] = ${tasks[taskIndex]}`);

    for (let resource of tasks[taskIndex]) {
      console.log(`Considering Resource: ${resource} with flag ${usedMask} & (${1 << resource})  !${(usedMask & (1 << resource))}`);
      if (!(usedMask & (1 << resource))) {
        console.log(
          `Resource ${resource} is available. Assigning and moving to Task[${taskIndex + 1}]`
        );

        if (solve(taskIndex + 1, usedMask | (1 << resource))) {
          console.log(`Task[${taskIndex}] successfully assigned Resource: ${resource}`);
          dp.set(key, true);
          return true;
        }

        console.log(`Backtracking: Resource ${resource} for Task[${taskIndex}] didn't work`);
      } else {
        console.log(`Resource ${resource} is already in use, skipping.`);
      }
    }

    console.log(`No valid resource assignment found for Task[${taskIndex}]`);
    dp.set(key, false);
    return false; // No valid assignment found
  }

  console.log("Starting task allocation...");
  const result = solve(0, 0);
  console.log("Task allocation complete. Result:", result);
  console.log('Map ', dp)
  return result;
}

const tasks = [[0, 2], [1, 2], [0, 1]];
const numResources = 3;
console.log(canCompleteTasks1(tasks, numResources))

function canCompleteTasks1(tasks, numResources) {
  const n = tasks.length;
  const dp = new Map();

  function solve(taskIndex, usedMask) {
    if(taskIndex === n) return true;

    const key = `${taskIndex}-${usedMask}`
    if(dp.has(key)) return dp.get(key);

    for(let resource of tasks[taskIndex]){
      if(!(usedMask & (1 << resource))) {
        if(solve(taskIndex + 1, usedMask | (1 << resource))){
          dp.set(key, true)
          return true
        }
      }
    }

    dp.set(key, false);
    return false
  }

  return solve(0, 0);
}
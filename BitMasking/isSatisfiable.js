function isSatisfiable(n, clauses) {
  const numAssignments = 1 << n; // Total number of truth assignments

  console.log(`Number of variables: ${n}`);
  console.log(`Number of possible assignments: ${numAssignments}`);
  console.log("Clauses:", clauses);

  // Iterate through all possible truth assignments
  for (let mask = 0; mask < numAssignments; mask++) {
    console.log(`\nEvaluating truth assignment: ${mask.toString(2).padStart(n, "0")}`);
    let isValid = true;

    // Check each clause against the current truth assignment
    for (let clauseIndex = 0; clauseIndex < clauses.length; clauseIndex++) {
      const [var1, val1, var2, val2] = clauses[clauseIndex];

      // Determine the truth values of variables in the current assignment
      const truth1 = (mask & (1 << var1)) > 0 ? 1 : 0;
      const truth2 = (mask & (1 << var2)) > 0 ? 1 : 0;

      // Evaluate the clause
      const clauseSatisfied =
        (val1 === 1 ? truth1 : 1 - truth1) ||
        (val2 === 1 ? truth2 : 1 - truth2);

      console.log(
        `  Clause ${clauseIndex + 1}: [x${var1 + 1}, ${val1 === 1 ? "True" : "False"}, x${var2 + 1}, ${
          val2 === 1 ? "True" : "False"
        }] => ` +
          `Truth values: x${var1 + 1}=${truth1}, x${var2 + 1}=${truth2} => ` +
          `Satisfied: ${clauseSatisfied}`
      );

      // If any clause is not satisfied, the current assignment is invalid
      if (!clauseSatisfied) {
        console.log("  Clause not satisfied. Skipping this assignment.");
        isValid = false;
        break;
      }
    }

    // If a valid assignment is found, return true
    if (isValid) {
      console.log("Valid assignment found!");
      return true;
    }
  }

  // If no valid assignment is found, return false
  console.log("No valid assignment found.");
  return false;
}

// Example Input
const n = 3;
const clauses = [
  [0, 1, 1, 0], // x1 OR NOT x2
  [1, 1, 2, 1], // x2 OR x3
];

console.log("Satisfiable:", isSatisfiable(n, clauses)); // Output: true

function solveNQueensCMe(n) {
  
}

function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.')); // Initialize empty board

  function printBoard() {
    console.log(board.map(row => row.join(' ')).join('\n'));
    console.log('-'.repeat(n * 2));
  }

  function isSafe(row, col) {
    // Log checking for safety
    console.log(`Checking if placing a queen at (${row}, ${col}) is safe`);

    for (let i = 0; i < row; i++) {
      // Check column
      if (board[i][col] === 'Q') {
        console.log(`Unsafe: Another queen found in column at (${i}, ${col})`);
        return false;
      }
      // Check left diagonal
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') {
        console.log(`Unsafe: Another queen found on left diagonal at (${i}, ${col - (row - i)})`);
        return false;
      }
      // Check right diagonal
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') {
        console.log(`Unsafe: Another queen found on right diagonal at (${i}, ${col + (row - i)})`);
        return false;
      }
    }
    console.log(`Safe to place queen at (${row}, ${col})`);
    return true;
  }

  function backtrack(row) {
    console.log(`Backtracking on row: ${row}`);
    printBoard();

    if (row === n) {
      console.log('Solution found:');
      printBoard();
      result.push(board.map(row => row.join(''))); // Add a deep copy of the board
      return;
    }

    for (let col = 0; col < n; col++) {
      console.log(`Trying to place queen at (${row}, ${col})`);
      if (isSafe(row, col)) {
        board[row][col] = 'Q'; // Place queen
        console.log(`Placed queen at (${row}, ${col}). Board state:`);
        printBoard();
        backtrack(row + 1); // Recurse for the next row
        board[row][col] = '.'; // Backtrack
        console.log(`Removed queen from (${row}, ${col}). Board state:`);
        printBoard();
      }
    }
  }

  backtrack(0);
  return result;
}

// Example usage
const solutions = solveNQueens(4);
console.log(`Total solutions: ${solutions.length}`);
solutions.forEach((solution, index) => {
  console.log(`Solution ${index + 1}:`);
  console.log(solution.join('\n'));
  console.log();
});


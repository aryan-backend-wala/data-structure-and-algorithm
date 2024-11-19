const board = [
  ["5", "3", ".", ".", "7", ".", "9", "1", "2"],
  ["6", ".", ".", "1", "9", "5", "3", "4", "8"],
  [".", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  [".", "6", "1", "5", "3", "7", "2", "8", "4"],
  [".", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
]

var solveSudoku = function (board) {
  console.log("Initial Board:");
  printBoard(board);

  solve(board);

  console.log("\nFinal Solved Board:");
  printBoard(board);
};

function solve(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] == ".") {
        for (let c = "1"; c <= "9"; c++) {
          if (isValid(arr, i, j, c)) {
            console.log(`Placing ${c} at (${i}, ${j})`);
            arr[i][j] = String(c);
            console.log(`Value at arr[${i}][${j}] = ${arr[i][j]} and C ${c}`)

            if (solve(arr)) {
              console.log(`Matrix Solved for given value of i ${i} and j ${j}`)
              return true;
            } else {
              console.log(`Backtracking: Removing ${c} from (${i}, ${j})`);
              arr[i][j] = ".";
            }
          } else {
            console.log(`Cannot place ${c} at (${i}, ${j})`);
          }
        }
        return false; // No valid number for this cell
      }
    }
  }
  return true;
}

function isValid(arr, row, col, c) {
  console.log(`Entered isValid function Row ${row}, Col ${col}, value: ${c}`)
  for (let i = 0; i < 9; i++) {
    if (arr[row][i] == c) {
      console.log(`Value at arr[${row}][${i}] = ${arr[row][i]} and C ${c}`)
      console.log(`Invalid: ${c} already in row ${row}`);
      return false;
    }
    if (arr[i][col] == c) {
      console.log(`Value at arr[${i}][${col}] = ${arr[i][col]} and C ${c}`)
      console.log(`Invalid: ${c} already in column ${col}`);
      return false;
    }
    if (
      arr[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
      Math.floor(col / 3) * 3 + (i % 3)
      ] == c
    ) {
      console.log(
        `Invalid: ${c} already in 3x3 grid starting at (${Math.floor(row / 3) * 3}, ${Math.floor(col / 3) * 3
        }) i ${i}`
      );
      return false;
    }
  }
  return true;
}

// function printBoard(board) {
//   board.forEach((row) => console.log(row.join(" ")));
// }

function solveSudoku1(board) {
  const rows = new Array(9).fill(0);
  const cols = new Array(9).fill(0);
  const boxes = new Array(9).fill(0);

  // Initialize bitmasks for existing numbers
  console.log("Initializing bitmasks for the existing numbers on the board:");
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== '.') {
        const bit = 1 << (num - 1); // Create a bitmask for the number
        rows[i] |= bit; // Mark the row
        cols[j] |= bit; // Mark the column
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        boxes[boxIndex] |= bit; // Mark the box
        console.log(`Number is ${num}, bit is ${bit} = ${num - 1}`)
        console.log(`[i, j] = [${i}, ${j}] rows[i] = ${rows[i]} cols[j] = ${cols[j]} `)
        console.log(`boxes at boxIndex ${boxIndex} is ${boxes[boxIndex]}`)
      }
    }
  }
  console.log('Rows ', rows)
  console.log('Cols ', cols)
  console.log('Boxes ', boxes)

  console.log("Initial Board State:");
  printBoard(board);

  const backtrack = (i, j) => {
    if (i === 9) {
      console.log("\nSolved Sudoku Board:");
      printBoard(board);
      return true; // Solved the board
    }
    if (j === 9) return backtrack(i + 1, 0); // Move to next row
    if (board[i][j] !== '.') return backtrack(i, j + 1); // Skip filled cells

    const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    const availableDigits = ~(rows[i] | cols[j] | boxes[boxIndex]) & 0x1FF; // 0x1FF is 511 in decimal (binary: 111111111)

    console.log(`\nAt cell (${i}, ${j}): ${availableDigits}`);
    console.log(`Available digits: ${getAvailableDigits(availableDigits)}`);

    for (let num = 1; num <= 9; num++) {
      const bit = 1 << (num - 1);
      if (availableDigits & bit) { // Check if the number can be placed
        console.log(`Placing ${num} at (${i}, ${j})`);
        // Place the number
        board[i][j] = num.toString();
        rows[i] |= bit;
        cols[j] |= bit;
        boxes[boxIndex] |= bit;

        // Recur to the next cell
        if (backtrack(i, j + 1)) return true;

        // Backtrack
        console.log(`Backtracking: Removing ${num} from (${i}, ${j})`);
        board[i][j] = '.'; // Reset the cell
        rows[i] ^= bit; // Remove the number
        cols[j] ^= bit; // Remove the number
        boxes[boxIndex] ^= bit; // Remove the number
      }
    }
    console.log(`No valid number found for cell (${i}, ${j}), backtracking...`);
    return false; // No valid number found
  };
  backtrack(0, 0);
}

// Helper function to print the board
function printBoard(board) {
  board.forEach((row) => console.log(row.join(" ")));
}

// Helper function to list available digits
function getAvailableDigits(mask) {
  const digits = [];
  for (let num = 1; num <= 9; num++) {
    if (mask & (1 << (num - 1))) digits.push(num);
  }
  return digits.join(", ");
}


solveSudoku1(board)
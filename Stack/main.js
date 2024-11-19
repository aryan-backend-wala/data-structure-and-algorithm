import { Stack } from "./stack.js";

export function divideBy2(decNumber) {
  const remStack = new Stack();
  let rem, binaryString = '';
  while (decNumber > 0) {
    rem = decNumber % 2
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString;
}

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let rem, baseString = "", digits = '0123456789ABCDEF';

  while(decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base)
  }

  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()]
  }

  return baseString;
}

// console.log(baseConverter(16, 8))

function isBalanced(expression) {
  const stack = new Stack();
  const openBrackets = "({[";
  const closeBrackets = ")}]";

  for (let char of expression) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.isEmpty()) return false;

      const lastOpen = stack.pop();
      const expectedOpen = openBrackets[closeBrackets.indexOf(char)];

      if (lastOpen !== expectedOpen) return false;
    }
  }

  return stack.isEmpty();
}


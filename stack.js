class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null
    }
    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function reverseString(str) {
  const stack = new Stack()
  for (let char of str) {
    stack.push(char)
  }

  let reverse = '';
  while (!stack.isEmpty()) {
    reverse += stack.pop()
  }

  return reverse
}

function isBalancedParentheses(str) {
  const stack = new Stack()

  for (let char of str) {
    if (char === '(') {
      stack.push(char)
      console.log(stack.items)
    } else if (char === ')') {
      if (stack.isEmpty()) {
        return false
      }
      stack.pop()
      console.log(stack.items)
    }
  }
  return stack.size() === 0
}

function isBalancedBrackets(input) {
  const stack = new Stack()

  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for(let char of input){
    if(Object.values(matchingBrackets).includes(char)){
      stack.push(char)
      log(stack.items)
    } else if(Object.keys(matchingBrackets).includes(char)){
      if(stack.isEmpty() || stack.pop() !== matchingBrackets[char]){
        return false
      }
      log(stack.items)
    }
  }
  return stack.isEmpty()
}

log(isBalancedBrackets('[{[()]}'))

function log(msg){
  console.log(msg)
}
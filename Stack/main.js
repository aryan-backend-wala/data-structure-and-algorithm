import { Stack } from "./stack.js";

const stack = new Stack();
stack.push(5)
stack.push(8)
let objectSymbols = Object.getOwnPropertySymbols(stack)
console.log(objectSymbols.length)
console.log(objectSymbols)
console.log(objectSymbols[0])
stack[objectSymbols[0]].push(1)
stack.print()
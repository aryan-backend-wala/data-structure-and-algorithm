import { decimal2Binary } from '../utils/decimalToBinary.js'

let n = 5;
let k = 1;

let mask = 1 << k;

let result = 5 ^ mask;
console.log(`Number is ${decimal2Binary(n)} after toggle it becomes ${decimal2Binary(result)}`)
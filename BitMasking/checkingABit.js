import { decimal2Binary } from "../utils/decimalToBinary.js";


for(let i=0;i<16;i++){
  let num = i;
  let mask = 1 << 2;
  if (num & mask) {
    console.log("The 3rd bit is set for Number " + i + " and binary is " + decimal2Binary(i));
  } else {
    console.log("The 3rd bit is not set for Number " + i + " and binary is " + decimal2Binary(i));
  }
}
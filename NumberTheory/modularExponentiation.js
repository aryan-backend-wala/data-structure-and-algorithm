function modularExponentiation(base, exponent, mod) {
  let result = 1;
  base = base % mod; // Handle cases where base > mod

  while (exponent > 0) {
    if (exponent % 2 === 1) { // If exponent is odd
      result = (result * base) % mod;
    }
    base = (base * base) % mod; // Square the base
    exponent = Math.floor(exponent / 2); // Divide exponent by 2
  }

  return result;
}

console.log(modularExponentiation(3, 13, 7));
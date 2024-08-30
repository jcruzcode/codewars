/*
======== Power (8 kyu) ========
The goal is to create a function of two inputs number and power, that "raises"
the number up to power (ie multiplies number by itself power times).

Examples

numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000

Note: Math.pow and some other Math functions like eval() and ** are disabled.

1) Parameter - Two numbers, number and power.
2) Return - The number raised to the power given.
3) Examples - see tests
4) Pseudocode - see comments

*/
function numberToPower(number, power) {
  let result = 1;
  // Multiply number by itself, power times
  for (let i = 1; i <= power; i++) {
    result *= number;
  }
  return result;
}

// Tests
console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);

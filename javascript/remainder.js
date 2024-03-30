/*
======== Find the Remainder (8 kyu) ========
Write a function that accepts two integers and returns the remainder of dividing
the larger value by the smaller value.

Division by zero should return NaN.
Examples:

n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero 

1) Parameter - Two integers n and m.
2) Return - The remainder of dividing the larger argument by the smaller argument
3) Examples - see tests
4) Pseudocode - see comments
*/

function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  // Division by zero returns NaN
  const max = Math.max(n,m);
  const min = Math.min(n,m);

  return min === 0 ? NaN : max % min;
}

// Tests
console.log(remainder(17,5), 2);
console.log(remainder(13, 72), 7);
console.log(remainder(72, 13), 7);
console.log(remainder(1, 0), NaN);
console.log(remainder(0, 0), NaN);

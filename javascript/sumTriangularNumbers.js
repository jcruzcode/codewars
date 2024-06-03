/*
======= Sum of Triangular Numbers (7 kyu) =======
Your task is to return the sum of Triangular Numbers up-to-and-including the nth
Triangular Number.

Triangular Number: 'any of the series of numbers (1, 3, 6, 10, 15, etc.) 
obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc.'

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]

e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.

1) Parameter - An integer, n.
2) Return - The sum of Triangular Numbers up-to-and-including the nth
            Triangular Number.
3) Examples - see tests
4) Pseudocode - see comments

*/

function sumTriangularNumbers(n) {
  let sum = 0;
  const arr = [];

  // Negative integers return 0
  if (n < 0) return 0;

  // Make an array of Triangular Numbers
  for (let i = 1; i <= n; i++) {
    sum += i;
    arr.push(sum);
  }

  // sum Triangular Numbers up-to-and-including the nth
  // Triangular Number
  return arr.reduce((acc, val) => acc + val, 0);
}

// Tests
console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);
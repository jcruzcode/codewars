/*
======= Return the first M multiples of N (7 kyu) =======
Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n.

Assume that m is a positive integer.

Ex.

(3, 5.0) --> [5.0, 10.0, 15.0]

1) Parameters - Two numbers, m and n.
2) Return - An array of numbers containing the first m multiples of n.
3) Examples - see tests
4) Pseudocode - see comments

*/
function multiples(m, n) {
  const digits = [];
  for (let i = 1; i <= m; i++) {
    // Build an array of the first m multiples of n.
    digits.push(i * n);
  }
  return digits;
}

// Tests
console.log(multiples(3, 5), [5, 10, 15]);
console.log(multiples(5, 2), [2, 4, 6, 8, 10]);
console.log(multiples(6, 10), [10, 20, 30, 40, 50, 60]);

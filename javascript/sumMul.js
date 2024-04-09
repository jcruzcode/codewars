/*
======== Sum of Multiples (8 kyu) ========
Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

1) Parameters - Two positive integers, m and n. Other inputs are invalid.
2) Return - The sum of all multiples of n below m (m is excluded from multiples).
3) Examples - see tests
4) Pseudocode - see comments

*/

function sumMul(n, m) {
  // n greater than or equal to m is invalid
  if (n >= m) return "INVALID";

  // Find the factor that gives the highest
  // multiple of n less than m
  // Find the sum of all multiples of n below m
  let sum = 0,
    factor;
  if (Number.isInteger(m / n)) {
    factor = m / n;
    // m is a multiple of n, so factor is not included
    for (let i = 1; i < factor; i++) {
      sum += n * i;
    }
    return sum;
  }

  factor = Math.floor(m / n);
  for (let i = 1; i <= factor; i++) {
    sum += n * i;
  }

  return sum;
}

// Tests
console.log(sumMul(2, 9)   === 20);
console.log(sumMul(3, 13)  === 30);
console.log(sumMul(4, 123) === 1860);
console.log(sumMul(4, -7)  === "INVALID");
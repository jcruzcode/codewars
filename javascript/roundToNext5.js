/*
======= Round up to the next multiple of 5 (7 kyu) =======
Given an integer as input, can you round it to the next (meaning, "greater than 
or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

1) Parameters - An integer
2) Return - The next multiple of 5 that is greater than or equal to the input
3) Examples - see tests
4) Pseudocode-  see comments

*/
function roundToNext5(n) {
  // Return n if it's divisible by 5
  if (n % 5 === 0) return n;
  
  // Determine multiple of 5 to return based on the sign of n
  if (n > 0) {
    return (Math.trunc(n / 5) + 1) * 5;
  } else if ( n < 0) {
    return Math.trunc(n / 5) * 5;
  }
}

// Tests
console.log("Divisible by 5 tests...")
console.log(roundToNext5(0),0);
console.log(roundToNext5(30), 30);
console.log(roundToNext5(-5), -5);

console.log("Other tests...")
console.log(roundToNext5(3),5);
console.log(roundToNext5(12),15);
console.log(roundToNext5(21),25);
console.log(roundToNext5(-2),0);


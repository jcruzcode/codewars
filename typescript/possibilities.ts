/*
======= Possibilities Array (7 kyu) =======
A non-empty array a of length n is called an array of all possibilities 
if it contains all numbers between 0 and a.length - 1 (both inclusive).

Write a function that accepts an integer array and returns true if the 
array is an array of all possibilities, else false.

Examples:

[1,2,0,3] => True
# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

[0] => True
# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

1) Parameters - An array of numbers, x.
2) Return - A boolean: false if x doesn't include a number in the range
            0 through x.length - 1 inclusive, true otherwise.
3) Examples - see tests
4) Pseudocode - see comments

*/
export function isAllPossibilities(x: number[]): boolean {
  // Return false if a number in the range 0 through
  // x.length - 1, inclusive, is not found in x.
  // Otherwise, return true.
  for (let i = 0; i <= x.length - 1; i++) {
    if (!x.includes(i)) return false;
  }

  return true;
}

// Tests
console.log(isAllPossibilities([0, 2, 19, 4, 4]), false);
console.log(isAllPossibilities([3, 2, 1, 0]), true);
console.log(isAllPossibilities([0, 1, 2, 3]), true);
console.log(isAllPossibilities([1, 2, 3, 4]), false);
console.log(isAllPossibilities([0, 2, 3]), false);
console.log(isAllPossibilities([0]), true);
console.log(isAllPossibilities([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true);
console.log(isAllPossibilities([0, 1, 3, -2, 5, 4]), false);
console.log(isAllPossibilities([1, -1, 2, -2, 3, -3, 6]), false);

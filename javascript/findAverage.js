/*
======== Calculate average (8 kyu) ========
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

1) Parameters - An array of numbers
2) Return - The average of the number in the given array.
3) Examples - see tests
4) Pseudocode - see comments

*/

function findAverage(array) {
  // Calculate the average of the numbers in array
  // Empty array returns 0
  return array.length === 0
    ? 0
    : array.reduce((acc, val) => acc + val, 0) / array.length;
}

// Tests
console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
console.log(findAverage([2, 4, 6]), 4);
console.log(findAverage([5, 10]), 7.5);
console.log(findAverage([]), 0);

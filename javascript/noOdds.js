/*
======= No oddities here (7 kyu) =======
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order 
they are given.

1) Parameters - An array of integers.
2) Return - Return an array containing the even integers from the original array
3) Examples - see tests
4) Pseudocode - see comments

*/

function noOdds(values) {
  return values.filter((value) => value % 2 === 0);
}

// Tests
console.log(noOdds([1,2,3,4,5]),[2,4]);
console.log(noOdds([1,3,5,7]), []);
console.log(noOdds([2,4,6,8]), [2,4,6,8]);
console.log(noOdds([]), []);
console.log(noOdds([5,6,7,8]), [6,8]);

/*
======== Merging sorted integer arrays (without duplicates) (8 kyu) ========
Write a function that merges two sorted arrays into a single one.

The arrays only contain integers. 

Also, the final outcome must be sorted and not have any duplicate.

1) Parameters - Two arrays, a and b, containing integers.
2) Return - A new array which is a and b merged, without duplicates, and sorted.
3) Examples - see tests
4) Pseudocode - see comments

*/
function mergeArrays(a, b) {
  // Merger arrays a and b without duplicates and sorted in ascending order
  return Array.from(new Set(a.concat(b))).sort((num1, num2) => num1 - num2);
}

// Tests
console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);

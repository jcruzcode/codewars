/*
======== Sum of differences in array (8 kyu) ========
Your task is to sum the differences between consecutive pairs in the array in 
descending order.

Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 

1) Parameters - An array of integers.
2) Return - The sum of the differences between consecutive pairs in the array in 
            descending order.
3) Examples - see tests
4) Pseudocode - see comments

*/

function sumOfDifferences(arr) {
  // Can't take difference for an array of less than 2 elements
  if (arr.length < 2) return 0;
  // Sort numbers in arr in desceding order
  arr.sort((num1, num2) => num2 - num1);

  let sum = 0,
    previousNum = arr[0];
  // Find the sum of the differences between consecutive pairs in the arr
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      sum += previousNum - arr[i];
      previousNum = arr[i];
    }
  }

  return sum;
}

// Tests
console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([1, 1, 1, 1, 1, 1]), 0);
console.log(sumOfDifferences([2, 4, 6, 8]), 6);

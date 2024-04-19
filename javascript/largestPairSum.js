/*
======= Largest pair sum in array (7 kyu) =======
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.

1) Parameters - An array of numbers
2) Return - The sum of the two largest numbers in the array
3) Examples - see tests
4) Pseudocode - see comments

*/

function largestPairSum(numbers) {
  // Sort numbers array in descending order
  numbers.sort((a,b) => b - a);
  // Compute sum of two largest numbers
  return numbers[0] + numbers [1];
}

// Tests
console.log(largestPairSum([10, 14, 2, 23, 19]), 42);
console.log(largestPairSum([99, 2, 2, 23, 19]), 122);
console.log(largestPairSum([2,4,6,8]), 14);
console.log(largestPairSum([-10, -2, -1, -100]), -3);
console.log(largestPairSum([1,2,3,4,5]), 9);

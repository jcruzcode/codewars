/*
======== Count of positives / sum of negatives (8 kyu) ========
Given an array of integers.

Return an array, where the first element is the count of positives numbers and
the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should 
return [10, -65].

1) Parameters - An array of integers
2) Return - An array of two integers, the first the number of positive integers
            in input and the second number being the sum of all the negative
            integers in input.
3) Examples - see tets
4) Pseudocode - see comments
*/

function countPositivesSumNegatives(input) {
  // Check if input is null or an empty array
  return input === null || input.length === 0
    ? [] // Return an empty array if so
    : // Otherwise count the positive integers and sum the negative integers
      // Return an as an array
      [
        input.filter((item) => item > 0).length,
        input.filter((item) => item < 0).reduce((acc, val) => acc + val, 0),
      ];
}

// Tests
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
  [10, -65]
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ]),
  [8, -50]
);

/*
======= Even numbers in an array (7 kyu) =======
Given an array of numbers, return a new array of length number containing the 
last even numbers from the original array (in the same order).

The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

1) Parameters - An array of numbers, array, and maximum length of new array, number.
2) Return - An array of length number, including only even numbers from array.
            The new array includes the last even numbers from array.
3) Examples - see tests
4) Pseudocode - see comments

*/
function evenNumbers(array, number) {
  // Filter array to only include the last even numbers of array
  // ensuring the length of the new array is number
  return array.filter((num) => num % 2 === 0).slice(-number);
}

// Tests
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);

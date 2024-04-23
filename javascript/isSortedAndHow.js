/*
======= Sorted? yes? no? how? (7 kyu) ======

Complete the method which accepts an array of integers, and returns one of the 
following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one 
correct answer.

1) Parameters - An array of integers
2) Return - A string: "yes, ascending", "yes, descending", or "no" based on the
            order of the numbers in the given array
3) Examples - see tests
4) Pseudocode - see comments

*/

function isSortedAndHow(array) {
  // Make a copy of array and sort it in ascending order
  const ascending = array.slice().sort((num1, num2) => num1 - num2);
  // Ascending if the first element of array and ascending are equal
  return array[0] === ascending[0]
    ? "yes, ascending"
    // Descending if the first element of array is equal to the last element of ascending
    : array[0] === ascending[ascending.length - 1] 
    ? "yes, descending"
    : "no"; // Otherwise, the array is neither
}

// Tests
console.log(isSortedAndHow([1, 2, 3, 4]) === "yes, ascending");
console.log(isSortedAndHow([6, 5, 4, 3, 2, 1]) === "yes, descending");
console.log(isSortedAndHow([1, -2, 5, 3]) === "no");

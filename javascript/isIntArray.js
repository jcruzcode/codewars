/*
====== Is Integer Array? (6 kyu) ======

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

    returns true  / True if every element in an array is an integer or a float with no decimals.
    returns true  / True if array is empty.
    returns false / False for every other input.

1) Parameters - An array 
2) Return - A boolean - true or false
            true if every element is an integer or if array is empty
            otherwise false
3) Examples - See tests
4) Pseudcode-  See comments

*/

function isIntArray(arr) {
    // Check for falsy input 
    if (!arr) return false;
    // Check for an empty array
    if (arr.length === 0) return true;
    // Filter out non-integers from arr
    const nonIntegers = arr.filter( item => !Number.isInteger(item));
    // Check if there are any non integers
    if (nonIntegers.length > 0) return false;
    // If all integers, then return true
    return true;
}
// Test Cases
console.log(isIntArray([]), true);
console.log(isIntArray([1, 2, 3, 4]), true);
console.log(isIntArray([1, 2, 3, NaN]), false);
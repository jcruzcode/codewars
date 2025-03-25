/*
======= Return the Missing Element (7 kyu) =======
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
Examples:

[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

1) Parameters - An array of integers, digits.
2) Return - The digit from 0-9, inclusive, that is not
            included in digits.
3) Examples - see tests
4) Pseudocode - see comments

*/
function getMissingElement(digits) {
  for (let i = 0; i < 10; i++) {
    // Return the missing digit 
    if (!digits.includes(i)) return i;
  }
}

// Tests
console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]) === 8);
console.log(getMissingElement( [9,2,4,5,7,0,8,6,1]) === 3);

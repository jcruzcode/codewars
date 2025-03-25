/*
======== validate code with simple regex (8 kyu) ========
Basic regex tasks. Write a function that takes in a numeric code of any length.

The function should check if the code begins with 1, 2, or 3 and return true if so.

Return false otherwise.

You can assume the input will always be a number.

1) Parameter - A number, code.
2) Return - A boolean: true if code starts with a 1, 2, or 3, otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function validateCode(code) {
  const nums = [1, 2, 3];
  const digits = code
    .toString()
    .split("") // Convert to string and split into digits
    .map((digit) => +digit); // Convert string to number

  return nums.includes(digits[0]); // Check if code starts with a 1, 2, or 3
}

// Tests
console.log(validateCode(123)  === true);
console.log(validateCode(248)  === true);
console.log(validateCode(8)    === false);
console.log(validateCode(321)  === true);
console.log(validateCode(9453) === false);
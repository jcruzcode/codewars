/*
======== get character from ASCII Value (8 kyu) ========
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0

1) Parameter - An integer representing an ASCII value
2) Return - A string corresponding to the ASCII value
3) Examples - see tests
4) Pseudocode - see comments

*/
function getChar(c) {
  // Convert ASCII value to a string 
  return String.fromCharCode(c);
}

// Tests
console.log(getChar(55) === '7');
console.log(getChar(56) === '8');
console.log(getChar(57) === '9');
console.log(getChar(58) === ':');
console.log(getChar(59) === ';');
console.log(getChar(60) === '<');
console.log(getChar(61) === '=');
console.log(getChar(62) === '>');
console.log(getChar(63) === '?');
console.log(getChar(64) === '@');
console.log(getChar(65) === 'A');

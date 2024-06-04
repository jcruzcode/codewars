/*
======== get ascii value of character(8 kyu) ========
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/

1) Parameter - A character, c, as a string.
2) Return - An integer representing the ASCII value of c.
3) Examples - see tests
4) Pseudocode - see comments

*/
function getASCII(c) {
  // Get ASCII value of a character
  return c.charCodeAt();
}
// Tests
console.log(getASCII("A"), 65);
console.log(getASCII(" "), 32);
console.log(getASCII("!"), 33);

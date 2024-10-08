/*
======= Build a square (7 kyu) =======
I will give you an integer. 
Give me back a shape that is as long and wide as the integer.
The integer will be a whole number between 1 and 50.

Example

n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

1) Parameter - A positive integer, integer.
2) Return - A shape made of "+" characters that has the dimensions
            integer by integer.
3) Examples - see tests
4) Pseudocode - see comments

*/
function generateShape(integer) {
  let shape = "";
  // Create shape made of "+" characters that has the dimensions
  // integer by integer
  for (let i = 1; i <= integer; i++) {
    shape += `${"+".repeat(integer)}\n`;
  }
  return shape.trim();
}

// Tests
console.log( generateShape(8) === '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
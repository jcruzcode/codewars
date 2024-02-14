/*
======== Stringy Strings (8 kyu) ========
write me a function stringy that takes a size and returns a string of 
alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

1) Parameter - A positive whole number representing size of string
2) Return - A string of alternating 1's and 0's of length 'size'
3) Examples - see tests
4) Pseudocode - see examples

*/
function stringy(size) {
   let binary = "";
   // Count from 1 to size (inclusive)
   for (let i = 1; i <= size; i++) {
    // For odd numbers concatenate 1 to binary
    // For even numbers concatenate 0 to binary
    i % 2 === 0 ? binary += "0" : binary += "1";
   }
   return binary;
}

console.log(stringy(1), '1');
console.log(stringy(3), '101');
console.log(stringy(6), '101010');
console.log(stringy(4), '1010');
console.log(stringy(12), '101010101010');
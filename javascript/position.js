/*
======== Find the position! (8 kyu) ========
When provided with a letter, return its position in the alphabet.

Input :: 'a'

Ouput :: 'Position of alphabet: 1'

1) Parameters - A lowercase letter of the English alphabet a string.
2) Return - A string of the form 'Position of alphabet: [# position in alphabet]'.
3) Examples - see tests
4) Pseudocode - see comments

*/
function position(letter) {
  // Calculate the position of the letter in the alphabet
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

// Tests
console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");

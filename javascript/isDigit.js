/*
======== Is it a number? (8 kyu) ========
Given a string s, write a method (function) that will return true if its
a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit('3')
isDigit('  3  ')
isDigit('-3.23')

should return false:

isDigit('3-4')
isDigit('  3   5')
isDigit('3 5')
isDigit('zero')

1) Parameter - A string, s.
2) Return - True if s is a valid single integer/floating number or false if it's not.
3) Examples - see tests
4) Pseudocode - see comments

*/

function isDigit(s) {
  // return true if its a valid single integer or floating number or false if its not.
  return s.trim() === "" ? false : !Number.isNaN(+s);
}

// Tests
console.log(isDigit("s2324"), false);
console.log(isDigit("-234.4"), true);    
console.log(isDigit(" "), false);
console.log(isDigit("3-4"), false);
console.log(isDigit("  3  "), true);
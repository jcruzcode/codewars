/*
======== The 'if' function (8 kyu) ========
Create a function called _if which takes 3 arguments:

a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:

_if(true, function(){console.log('True')}, function(){console.log('false')})
// Logs 'True' to the console.

1) Parameter - A boolean, bool, and two functions, func1 and func2.
2) Return - func1 if bool is truthy, otherwise func2.
3) Examples - see tests
4) Pseudocode - see comments

*/
function _if(bool, func1, func2) {
  // Call func1 if bool is truthy, otherwise call func2
  return bool ? func1() : func2();
}

// Tests
const a = () => `Called func1`;
const b = () => `Called func2`;

console.log(_if(true, a, b) === `Called func1`);
console.log(_if(false, a, b) === `Called func2`);
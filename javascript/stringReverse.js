/*
======= esreveR gnirtS (7 kyu) =======
Create a function called reverse for the String prototype that will allow the 
following functionality:

'String'.reverse();// => returns 'gnirtS'
'Super awesome string'.reverse();// => returns 'gnirts emosewa repuS'

1) Parameters - A string
2) Return - The original string in reverse.
3) Examples - see tests
4) Pseudocode - see comments

*/

// Create a String method reverse that returns a reversed string
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

// Tests
console.log("String".reverse()         === "gnirtS");
console.log("Another string".reverse() === "gnirts rehtonA");

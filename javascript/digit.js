/*
======== Regexp Basics - is it a digit? (8 kyu) ========
Implement String.prototype.digit which should return true if 
given object is a digit (0-9), false otherwise.

1) Parameters - A string object.
2) Return - True if the object is a digit 0-9 otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
String.prototype.digit = function () {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Check if the string is included in digits
  return digits.includes(this.toString());
};

// Tests
console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);

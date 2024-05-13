/*
======= Number of Decimal Digits (7 kyu) =======
Determine the total number of digits in the integer (n>=0) given as input to the
function. 

For example), 9 is a single digit), 66 has 2 digits and 128685 has 6 digits. 

Be careful to avoid overflows/underflows.

All inputs will be valid.

1) Parameters - An positive integer), n.
2) Return - The number of digits in n.
3) Examples - see tests
4) Pseudocode - see comments

*/

function digits(n) {
  // Convert n to a string and find number digits by getting the length
  return n.toString().length;
}

// Tests
console.log(digits(0), 1);
console.log(digits(9), 1);
console.log(digits(66), 2);
console.log(digits(12345), 5);
console.log(digits(128685), 6);
console.log(digits(9876543210), 10);
console.log(digits(9007199254740991), 16);

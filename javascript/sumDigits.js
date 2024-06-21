/*
======= Summing a number's digits (7 kyu) =======
Write a function named sumDigits which takes a number
as input and returns the sum of the absolute value of 
each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be 
integer values.

1) Parameter - An integer, number.
2) Return - Sum of the absolute value of all digits
            in number.
3) Examples - see tests
4) Pseudocode - see comments

*/
function sumDigits(number) {
  let num;
  // Take absolute value of number if negative
  number < 0 ? (num = Math.abs(number)) : (num = number);
  return num
    .toString() // convert number to string
    .split("") // split into an array of string digits
    .map((digit) => +digit) // map each string to a number
    .reduce((acc, val) => acc + val, 0); // sum the digits
}

// Tests
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);

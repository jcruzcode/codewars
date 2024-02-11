/*
====== Does my number look big in this? (6 kyu) ======
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

1) Parameters - A positive integer
2) Return - A boolean value 
            True if the input is the sum of its own digits each raised to the
            power of the number of digits in base 10, false otherwise.
3) Examples - see test cases
4) Pseudocode - see comments
*/
function narcissistic(value) {
  // Find the sum of digits with each digit raised to the power of the number
  // of digits of value and check if sum and value are equal, return true if so,
  // otherwise false.
  return value
    .toString() 
    .split("") 
    .map((digit) => +digit)
    .reduce((acc, val) => acc + val ** String(value).length, 0) === value;
}

// Tests
console.log(narcissistic(7), true);
console.log(narcissistic(153), true);
console.log(narcissistic(1652), false);
console.log(narcissistic(13), false);
console.log(narcissistic(12), false);
console.log(narcissistic(47), false);
console.log(narcissistic(912985153), true);

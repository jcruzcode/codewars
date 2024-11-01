/*
======== Take the Derivative (8 kyu) ========
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. 

Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)

In this case, the function should multiply 7 and 8, and then subtract 1 from 8. 

It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 

Notes:

    The output of this function should be a string
    The exponent will never be 1, and neither number will ever be 0

1) Parameters - Two positive integers, coefficient and exponent.
2) Return - The derivative of the polynomial formed from coefficient and exponent as a string.
3) Examples - see tests
4) Pseudocode - see comments

*/
function derive(coefficient, exponent) {
  // Calculate the derivative of the polynomial
  return `${coefficient * exponent}x^${exponent - 1}`;
}

// Tests
console.log(derive(7, 8) === "56x^7");
console.log(derive(5, 9) === "45x^8");
console.log(derive(5, 5) === "25x^4");
console.log(derive(2, 1) === "2x^0");
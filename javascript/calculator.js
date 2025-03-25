/*
======== simple calculator (8 kyu) ========
You are required to create a simple calculator 
that returns the result of addition, subtraction, 
multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.

The third argument should represent a sign 
indicating the operation to perform on these two 
numbers.

if the variables are not numbers or the sign does 
not belong to the list above a message 'unknown value'
must be returned.

Example:

calculator(1,2,'+'); //=> result will be 3
calculator(1,2,'&'); //=> result will be 'unknown value'
calculator(1,'k','*'); //=> result will be 'unknown value'

1) Parameters - two values, a & b, and a third argument, sign, which
                is a character represeting the arithmetic operation.
2) Return - The result of the arithmetic operation as a number or
            'unknown value' if a or b is NaN or the operation is invalid
3) Examples - see tests
4) Pseudocode - see comments

*/

function calculator(a, b, sign) {
  const operators = ["+", "-", "*", "/"];
  return typeof a !== "number" || typeof b !== "number" || !operators.includes(sign)
    ? "unknown value" // message for non-numbers and invalid operators
    : sign === "+" // addition
    ? a + b
    : sign === "-" // subtraction
    ? a - b
    : sign === "*" // multiplication
    ? a * b
    : a / b; // division
}

// Tests
console.log(calculator(1, 2, "+")   === 3);
console.log(calculator(1, 2, "-")   === -1);
console.log(calculator(3, 5, "*")   === 15);
console.log(calculator(6, 2, "/")   === 3);
console.log(calculator(6, 2, "$")   === "unknown value");
console.log(calculator(6, "h", "*") === "unknown value");

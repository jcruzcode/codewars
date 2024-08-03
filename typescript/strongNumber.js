"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strongNumber = void 0;
/*
======= Strong Number (Special Numbers Series #2) =======
Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task

Given a positive number, find if it is strong or not, and return either 'STRONG!!!!' or 'Not Strong !!'.
Examples

    1 is a strong number, because 1! = 1, so return 'STRONG!!!!'.
    123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return 'Not Strong !!'.
    145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return 'STRONG!!!!'.
    150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return 'Not Strong !!'.

1) Parameters - A positive integer, num
2) Return - A string indicating whether the number is strong or not.
3) Examples - see tests
4) Pseudocode - see comments

*/
const strongNumber = (num) => {
    return num
        .toString() // Convert number to string
        .split("") // Split into digits
        .map((digit) => {
        // Calculate factorial for each digit
        let product = 1;
        for (let i = +digit; i > 0; i--) {
            product *= i;
        }
        return product;
    })
        .reduce((acc, val) => acc + val, 0) === num // Check if strong
        ? "STRONG!!!!"
        : "Not Strong !!";
};
exports.strongNumber = strongNumber;
// Tests
console.log((0, exports.strongNumber)(145) === "STRONG!!!!");
console.log((0, exports.strongNumber)(1) === "STRONG!!!!");
console.log((0, exports.strongNumber)(123) === "Not Strong !!");
console.log((0, exports.strongNumber)(150) === "Not Strong !!");

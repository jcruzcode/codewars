"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disariumNumber = disariumNumber;
/*
======= Disarium Number (Special Numbers Series #3) (7 kyu) =======
Definition

Disarium number is the number that The sum of its digits powered with their
respective positions is equal to the number itself.

Task

Given a number, Find if it is Disarium or not .

Notes

    Number passed is always Positive .
    Return the result as String

Input >> Output Examples

disariumNumber(89) ==> return "Disarium !!"

Explanation:

    Since , 81 + 92 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!"

Explanation:

Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

1) Parameter - A positive integer, n.
2) Return - A string indicating whether n is disarium or not.
3) Examples - see tests
4) Pseudocode - see comments

*/
function disariumNumber(n) {
    return n
        .toString()
        .split("")
        .map((digit, index) => (+digit) ** (index + 1))
        .reduce((acc, val) => acc + val, 0) === n
        ? "Disarium !!"
        : "Not !!";
}
// Tests
console.log(disariumNumber(89), "Disarium !!");
console.log(disariumNumber(564), "Not !!");
console.log(disariumNumber(1024), "Not !!");
console.log(disariumNumber(135), "Disarium !!");
console.log(disariumNumber(136586), "Not !!");

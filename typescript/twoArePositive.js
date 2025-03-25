"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoArePositive = twoArePositive;
/*
======= Two numbers are positive (7 kyu) =======
Task:

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns
True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:

two_are_positive(2, 4, -3) == True
two_are_positive(-4, 6, 8) == True
two_are_positive(4, -6, 9) == True
two_are_positive(-4, 6, 0) == False
two_are_positive(4, 6, 10) == False
two_are_positive(-14, -3, -4) == False

1) Parameters - Three integers, a, b, and c.
2) Return - True if exactly if of three integers is positive,
            false otherwise.
3) Examples - see tests
4) Pseudocode - see comments

*/
function twoArePositive(a, b, c) {
    const nums = [a, b, c];
    return nums.filter((num) => num > 0).length === 2;
}
// Tests
console.log(twoArePositive(2, 4, -3), true, '(2, 4, -3)');
console.log(twoArePositive(-4, 6, 8), true, '(-4, 6, 8)');
console.log(twoArePositive(4, -6, 9), true, '(4, -6, 9)');
console.log(twoArePositive(-4, 6, 0), false, '(-4, 6, 0)');
console.log(twoArePositive(4, 6, 10), false, '(4, 6, 10)');
console.log(twoArePositive(-14, -3, -4), false, '(-14, -3, -4)');

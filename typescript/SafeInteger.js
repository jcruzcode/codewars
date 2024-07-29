"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeInteger = SafeInteger;
/*
======== Is integer safe to use? (8 kyu) ========
Not all integers can be represented by JavaScript/TypeScript.

It has space to to represent 53bit signed integers.

In this Kata, we've to determine if it is safe to use the integer or not.

Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false

1) Parameters - An integer.
2) Return - True is the integer is 'safe', otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function SafeInteger(n) {
    // Return a boolean indicating whether 
    // the number is a safe integer or not
    return Number.isSafeInteger(n);
}
// Tests
console.log(SafeInteger(9007199254740992), false);
console.log(SafeInteger(9007199254740990), true);

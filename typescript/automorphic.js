"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automorphic = automorphic;
/*
======== Automorphic Number (Special Numbers Series #6) (7 kyu) ========
Definition

A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Task

Given a number determine if it Automorphic or not .

autoMorphic (25) -->> return "Automorphic"

25 squared is 625 , Ends with the same number's digits which are 25 .

autoMorphic (13) -->> return "Not!!"

13 squared is 169 , Not ending with the same number's digits which are 69 .

1) Parameter - A positive integer, n.
2) Return - A string indicating whether n is automorphic or not.
3) Examples - see test
4) Pseudocode - see comments

*/
function automorphic(n) {
    const square = n ** 2;
    // check if square ends with the number n to determine automorphic
    return square.toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}
// Tests
console.log(automorphic(1), "Automorphic");
console.log(automorphic(3), "Not!!");
console.log(automorphic(6), "Automorphic");
console.log(automorphic(9), "Not!!");
console.log(automorphic(25), "Automorphic");
console.log(automorphic(53), "Not!!");
console.log(automorphic(76), "Automorphic");
console.log(automorphic(95), "Not!!");
console.log(automorphic(625), "Automorphic");
console.log(automorphic(225), "Not!!");

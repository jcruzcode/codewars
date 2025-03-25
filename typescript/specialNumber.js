"use strict";
/*
======= Special Number (Special Numbers Series #5) (7 kyu) =======
Definition

A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Notes

    The number passed will be positive (N > 0) .

    All single-digit numbers within the interval [1:5] are considered as special number.

1) Parameter - A number, n.
2) Return - A string indicating whether or not the number given is "special".
3) Examples - see tests
4) Pseudocode - see comments

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialNumber = specialNumber;
function specialNumber(n) {
    const digits = ["0", "1", "2", "3", "4", "5"];
    // Determine if the number, n, is special,
    // meaning it only contains numbers found in digits
    return n
        .toString()
        .split("")
        .filter((num) => !digits.includes(num)).length > 0
        ? "NOT!!"
        : "Special!!";
}
// Tests
console.log(specialNumber(2), "Special!!");
console.log(specialNumber(3), "Special!!");
console.log(specialNumber(6), "NOT!!");
console.log(specialNumber(9), "NOT!!");
console.log(specialNumber(11), "Special!!");
console.log(specialNumber(55), "Special!!");
console.log(specialNumber(26), "NOT!!");
console.log(specialNumber(92), "NOT!!");
console.log(specialNumber(25432), "Special!!");
console.log(specialNumber(2783), "NOT!!");

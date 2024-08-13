"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxTriSum = maxTriSum;
/*
======= Maximum Triplet Sum (Array Series #7) (7 kyu) =======
Task

Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :

    Array/list size is at least 3 .

    Array/list numbers could be a mixture of positives , negatives and zeros .

    Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

1) Parameters - An array of integers, nums.
2) Return - The maximum triplet sum, without duplication.
3) Examples - see tests
4) Pseudocode - see comments

*/
function maxTriSum(nums) {
    // Remove duplicate numbers
    const numbers = new Set(nums.sort((a, b) => b - a));
    // Find the sum of the highest three numbers
    return Array.from(numbers)
        .slice(0, 3)
        .reduce((sum, val) => sum + val, 0);
}
// Tests
console.log(maxTriSum([1, 2, 3, 4, 5]) === 12);
console.log(maxTriSum([-10, -2, -45, 0, 1, 5]) === 6);
console.log(maxTriSum([100, -1, 2, -64, 10, -99]) === 112);

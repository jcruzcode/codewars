"use strict";
/*
======== Find Maximum and Minimum Values of a List (8 kyu) ========
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )

that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes

    You may consider that there will not be any empty arrays/vectors.

1) Parameters - An array of numbers, list.
2) Return - The min and max values in the list.
3) Examples - see tests
4) Pseudocode - see comments

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = exports.min = void 0;
const min = (list) => {
    return Math.min(...list);
};
exports.min = min;
const max = (list) => {
    return Math.max(...list);
};
exports.max = max;
// Tests
console.log((0, exports.min)([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log((0, exports.min)([42, 54, 65, 87, 0]), 0);
console.log((0, exports.max)([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log((0, exports.max)([5]), 5);

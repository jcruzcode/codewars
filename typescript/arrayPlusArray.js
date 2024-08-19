"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayPlusArray = void 0;
/*
======== Array plus array (8 kyu) ========
I'm new to coding and now I want to get the sum of two arrays...
Actually the sum of all their elements.
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

1) Parameters - Two arrays of integers, arr1 and arr2.
2) Return - The sum of the elements of the two arrays.
3) Examples - see tests
4) Pseudocode - see comments
  
*/
const arrayPlusArray = (arr1, arr2) => {
    // Calculate the sum of the elements in arr1 & arr2
    return arr1.concat(arr2).reduce((acc, val) => acc + val, 0);
};
exports.arrayPlusArray = arrayPlusArray;
// Tests
console.log((0, exports.arrayPlusArray)([1, 2, 3], [4, 5, 6]), 21);
console.log((0, exports.arrayPlusArray)([-1, -2, -3], [-4, -5, -6]), -21);
console.log((0, exports.arrayPlusArray)([0, 0, 0], [4, 5, 6]), 15);
console.log((0, exports.arrayPlusArray)([100, 200, 300], [400, 500, 600]), 2100);
console.log((0, exports.arrayPlusArray)([0, 0, 0], [0, 0, 0]), 0);
console.log((0, exports.arrayPlusArray)([1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50]), 178);
console.log((0, exports.arrayPlusArray)([-1, -2, -3, -4], [10]), 0);

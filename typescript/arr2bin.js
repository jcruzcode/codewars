"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr2bin = arr2bin;
/*
======== Arguments to Binary addition (8 kyu) ========

Given an array add all the number elements and return the binary equivalent of that sum;
to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

1) Parameters - An array of any datatypes, arr.
2) Return - The sum represented in binary.
3) Examples - see tests
4) Pseudocode - see comments

*/
function arr2bin(arr) {
    return arr
        .filter((item) => typeof item === "number") // remove non-numbers
        .reduce((acc, val) => acc + val, 0) // calculate sum of numbers
        .toString(2); // convert to binary string
}
// Tests
console.log(arr2bin([1, 2]), "11");
console.log(arr2bin([1, 2, 3, 4, 5]), "1111");
console.log(arr2bin([1, 10, 100, 1000]), "10001010111");
console.log(arr2bin([null]), "0");
console.log(arr2bin([true, true, false, 15]), "1111");

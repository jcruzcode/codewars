"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNice = isNice;
/*
======= Nice Array (7 kyu) =======
A Nice array is defined to be an array where for every value n in the array,
there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

Write a function named isNice/IsNice that returns true if its array argument
is a Nice array, else false.

An empty array is not considered nice.

1) Parameter - An array of numbers, arr.
2) Return - A boolean: true if a number n, n + 1 or n - 1 also exists in arr
            false otherwise.
3) Examples - see tests
4) Pseudocode - see comments

*/
function isNice(arr) {
    // Return false if arr is empty or a number n is found
    // such that n + 1  and n - 1 doesn't exist in arr,
    // otherwise return true.
    if (arr.length === 0)
        return false;
    for (const num of arr) {
        if (!(arr.includes(num + 1) || arr.includes(num - 1)))
            return false;
    }
    return true;
}
// Tests
console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);
console.log(isNice([1, 0, 2]), true);
console.log(isNice([]), false);
console.log(isNice([1]), false);

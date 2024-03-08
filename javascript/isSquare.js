/*
====== Are they square 2? (6 kyu) ======

Another Kata testing an whether all elements of an array are square, although this time the array can be a multidimensional array with any number of dimensions.

Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

Your function should return true if all elements are square numbers and false if not.

An entirely empty array should return undefined.

You can assume that all array elements will be positive integers.

1) Parameters - An array of positive integers
2) Return - Undefined for an empty array
            True if all elements are square numbers, otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/

function isSquare(arr) {
    if (arr.length === 0) return undefined;
    // Flatten multidimensional array
    const flatArr = arr.flat(Infinity);
    // Loop over flatArr and check if a non square number exists
    for (let i = 0; i < flatArr.length; i++) {
        if (!Number.isInteger(Math.sqrt(flatArr[i]))) return false;
    }
    // All elements are squares
    return true;
}

// Tests
console.log(isSquare([1, 4, 9, 16, 25, 36]), true);
console.log(isSquare([1, 2, 3, 4, 5, 6]), false);
console.log(isSquare([1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 289, [324, [361, 400]]]]]]), true);


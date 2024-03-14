/*
======== Merge two sorted arrays into one (8 kyu) ========
You are given two sorted arrays that both only contain integers. 

Your task is to find a way to merge them into a single one, sorted in asc order.

Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the 
original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays 
with 0 or more Integers.

If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. 
Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.

Examples (input -> output)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

1) Parameters - Two sorted arrays containing only integers.
2) Return - The two arrays merged into one sorted in ascending order.
3) Examples - see tests
4) Pseudocode - see comments

*/

function mergeArrays(arr1, arr2) {
    // Merge the elements of arr1 and arr2 into a single array
    // const numbers = arr1.concat(arr2);
    // Create a set from numbers to ensure no duplicates
    // const set = new Set(numbers);
    // Return an array sorted in ascending order from set
    return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);
}

// Tests
console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]), [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]);

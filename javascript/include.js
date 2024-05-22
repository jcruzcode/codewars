/*
======== Enumerable Magic - Does My List Include This? (8 kyu) ========

Create a method that accepts a list and an item, and returns true if the item 
belongs to the list, otherwise false.

1) Parameters - An array of numbers or strings, arr, and a number or string,
                item. 
2) Return - True if item is included in arr, otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function include(arr, item) {
  // Determine if the item is included in arr
  return arr.includes(item);
}

// Tests
console.log(include([1,2,3,4], 3), true )
console.log(include([1,2,4,5], 3), false)
console.log(include([], 3),        false)
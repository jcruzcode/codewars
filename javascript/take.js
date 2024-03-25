/*
======== Enumerable Magic #25 - Take the First N Elements (8 kyu) ========
Create a function that accepts a list/array and a number n, and returns a 
list/array of the first n elements from the list/array.

1) Parameters - an array, arr, and a non-negative integer, n.
2) Return - an array of the first n elements of arr
3) Examples - see tests
4) Pseudocode - see comments

*/
function take(arr, n) {
  //if (arr.length === 0) return [];
  //
  //const numbers = [];
  // Add first n elements from arr to numbers
  //for (let i = 0; i < n; i++) {
  //  if (arr[i] !== undefined) numbers.push(arr[i]);
  //}
  //return numbers;

  // Return first n elements from arr
  return arr.slice(0, n);
}

// Tests
console.log(take([1,2,3,4,5],3), [1,2,3]);
console.log(take([-1,2,4,5,6],4), [-1,2,4,5]);
console.log(take([], 100), []);
console.log(take([2,3,4,5646,32,1231,443,-1], 8), [2,3,4,5646,32,1231,443,-1]);
console.log(take([3,6,9], 1), [3]);
/*
======= Nth Smallest Element (Array Series #4) (7 kyu) ========
Task

Given an array/list of integers, find the Nth smallest element in the array.
Notes

    Array/list size is at least 3.
    Array/list's numbers could be a mixture of positives , negatives and zeros.
    Repetition in array/list's numbers could occur, so don't remove duplications.

Input >> Output Examples

arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 

1) Parameters - An array of integers, arr, and a position, pos, as a number.
2) Return - The nth smallest number in arr at position given by pos.
3) Examples - see tests
4) Pseudocode - see comments

*/
function nthSmallest(arr, pos) {
  // Make a copy of arr and sort it in increasing order
  // Return the element given at index pos - 1
  return arr.slice().sort((a, b) => a - b)[pos - 1];
}


// Tests
console.log(nthSmallest(                 [3,1,2], 2) ===  2);
console.log(nthSmallest(        [15,20,7,10,4,3], 3) ===  7);
console.log(nthSmallest(          [-5,-1,-6,-18], 4) === -1);
console.log(nthSmallest([-102,-16,-1,-2,-367,-9], 5) === -2);
console.log(nthSmallest(      [2,169,13,-5,0,-1], 4) ===  2);
console.log(nthSmallest(           [2,1,3,3,1,2], 3) ===  2);
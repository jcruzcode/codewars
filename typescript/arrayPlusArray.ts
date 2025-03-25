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
export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  // Calculate the sum of the elements in arr1 & arr2
  return arr1.concat(arr2).reduce((acc, val) => acc + val, 0);
};

// Tests
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
console.log(arrayPlusArray([0, 0, 0], [0, 0, 0]), 0);
console.log(arrayPlusArray([1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50]), 178);
console.log(arrayPlusArray([-1, -2, -3, -4], [10]), 0);

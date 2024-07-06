/*
======= Smallest value of an array (7 kyu) =======
Write a function that can return the smallest value of an array or the index of that value. 

The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. 

Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

1) Parameters - An array of numbers, arr, and a string, toReturn.
2) Return - The smallest value in arr or the index of the smallest value
            depending on the value of toReturn.
3) Examples - see test
4) Pseudocode - see comments

*/
function min(arr, toReturn) {
  // Find minimum value in arr
  const minValue = Math.min(...arr);
  // Return minumum value if given 'value' for toReturn
  // otherwise return the index of the minimum value
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}

// Tests
console.log(min([1, 2, 3, 4, 5], "value"), 1);
console.log(min([1, 2, 3, 4, 5], "index"), 0);
console.log(min([0, 2, 4, 6, -1], "value"), -1);
console.log(min([0, 2, 4, 6, -1], "index"), 4);

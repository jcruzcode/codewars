/*
========  Printing Array elements with Comma delimiters (8 kyu) ========
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string
arrays, array of number arrays.

1) Parameter - An array of elements of any data type
2) Return - String with comma delimited elements of the array in th same order.
3) Examples - see tests
4) Pseudocode - see comments

*/
// Returns a string with comma delimited elements of array
function printArray(array) {
  return array.join(",");
}

// Tests
console.log(printArray(["h","e","y"]) === "h,e,y");
console.log(printArray([1,2,3]) === "1,2,3");
console.log(printArray([true,false,false]) === "true,false,false");
console.log(printArray([[1,2,3], ["h","e","y"]]) === "1,2,3,h,e,y");

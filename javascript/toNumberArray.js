/*
======== Convert an array of strings to array of numbers (7 kyu) =======
Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

1) Parameters - An array of numbers represented as strings.
2) Return - An array with the string numbers converted to numbers.
3) Examples - see tests
4) Pseudocode - see comments

*/
function toNumberArray(stringarray) {
  // Convert all elements of stringarray to number type
  return stringarray.map((num) => +num);
}

// Tests
console.log(toNumberArray(["1", "2", "3", "4", "5"]), [1,2,3,4,5]);
console.log(toNumberArray(["1.23", "6.8", "43244.55"]), [1.23, 6.8, 43244.55]);
/*
======= Consecutive items (7 kyu) =======
You are given a list of unique integers arr, and two integers a and b. 

Your task is to find out whether or not a and b appear consecutively in arr, and
return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

1) Parameters - An array of unique integers containing two particular integers
                a and b.
2) Returns - A boolean value if a and b appear consecutively in the array
3) Examples - see tests
4) Pseudocode - see comments

*/

function consecutive(arr, a, b) {
  // Check if the index of b is one more or one less than the index of a
  return arr.indexOf(a) + 1 === arr.indexOf(b) || arr.indexOf(a) - 1 === arr.indexOf(b);
  
}

// Tests
console.log(consecutive([1, 3, 5, 7], 3, 7), false);
console.log(consecutive([1, 3, 5, 7], 3, 1), true);
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);

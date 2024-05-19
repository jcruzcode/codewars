/*
======= Small enough? - Beginner (7 kyu) =======
You will be given an array and a limit value. 

You must check that all values in the array are below or equal to the limit 
value. 

If they are, return true. Else, return false.

You can assume all values in the array are numbers.

1) Parameters - An array, a, of numbers and a number, limit.
2) Return - True if all elements of a are less than or equal to the given limit,
            otherwise false.
3) Examples - see tests
4) Pseudocode - see comments
*/

function smallEnough(a, limit) {
  // Check that every element in a is less than or equal to the limit
  return a.every((item) => item <= limit);
}

// Tests
console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

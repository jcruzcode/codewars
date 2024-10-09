/*
======= Currying functions: multiply all elements in an array (7 kyu) =======
To complete this Kata you need to make a function multiplyAll/multiply_all 
which takes an array of integers as an argument. 

This function must return another function, which takes a single integer 
as an argument and returns a new array.

The returned array should consist of each of the elements from the first array 
multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.

1) Parameters - An array of integers for the outer function and an integer for
                the inner function.
2) Return - An array of integers which is the original array of numbers multiplied
            by the the integer of the inner function.
3) Examples - see tests
4) Pseudocode - see comments

*/
function multiplyAll(array) {
  // Return a function which takes the array and multiplies
  // each element by an integer, n.
  function multiplyBy(n) {
    return array.map((item) => item * n);
  }
  return multiplyBy;
}

// Tests
console.log(multiplyAll ([1,2,3]) (2) , [2,4,6], `multiplyAll ([ 1, 2, 3 ]) (2) `);
console.log(multiplyAll ([1,2,3]) (1) , [1,2,3], `multiplyAll ([ 1, 2, 3 ]) (1) ` );
console.log(multiplyAll ([1,2,3]) (0) , [0,0,0], `multiplyAll ([ 1, 2, 3 ]) (0) `);
console.log(multiplyAll ([]) (10) , [], `multiplyAll ([]) (10) ` );

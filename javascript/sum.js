/*
======= Sum of all arguments (7 kyu) =======
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15

1) Parameters - Multiple arguments that are numbers
2) Return - The sum of all the arguments 
3) Examples- see test
4) Pseudocode - see comments

*/

function sum(...args) {
  // return the sum of all arguments given
  return args.reduce((acc, val) => acc + val, 0);
}

// Tests
console.log(sum(1,2,3), 6);
console.log(sum(8,2), 10);
console.log(sum(1,2,3,4,5), 15);
console.log(sum(2,4,10,-3), 13);

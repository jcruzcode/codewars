/*
======== Grasshopper - Summation (8 kyu) ========
Summation

Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0. 

Your function only needs to return the result, what is shown between 
parentheses in the example below is how you reach that result and 
it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

1) Parameter - A number, num.
2) Return - The sum of 1 to num, as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/

const summation = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    // Calculate the sum from 1 to n
    sum += i;
  }
  return sum;
};

// Tests
console.log(summation(1),  1);
console.log(summation(2),  3);
console.log(summation(8), 36);
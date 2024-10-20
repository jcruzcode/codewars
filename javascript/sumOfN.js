/*
======= Basic Sequence Practice (7 kyu) =======
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern.

The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where 
the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is 
generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3

Your Task

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
Examples

 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]

1) Parameter - An integer, n.
2) Return - An array of numbers integers described by the sequence above.
3) Examples - see tests
4) Pseudocode - see comments 

*/
function sumOfN(n) {
  const nums = [];
  let previous = 0;
  // Generate the sequence of integers described
  // above based on the sign of n
  if (n < 0) {
    for (let i = 0; i >= n; i--) {
      nums.push(i + previous);
      previous += i;
    }
    
    return nums;
  } else if (n > 0) {
    for (let i = 0; i <= n; i++) {
      nums.push(i + previous);
      previous += i;
    }
    
    return nums;
  } else return [0];
}

// Tests
console.log(sumOfN(3), [0, 1, 3, 6]); 
console.log(sumOfN(-4), [0, -1, -3, -6, -10]);  
console.log(sumOfN(1), [0, 1]);    
console.log(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);

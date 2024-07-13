/*
======= Factorial (7 kyu) =======
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 


For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. 

If input is below 0 or above 12 throw an exception of type throw a RangeError (JavaScript).

1) Parameter - An integer, n.
2) Return - The factorial of n or throw a RangeError if n < 0 or n > 12.
3) Examples - see tests
4) Pseudocode - see comments

*/

function factorial(n) {
  let factorial = 1;
  
  // Throw RangeError for n < 0 or n > 12
  if (n < 0 || n > 12) throw new RangeError();

  // Calculate factorial of n
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

// Tests
console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");

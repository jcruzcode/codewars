/*
======= Factorial (7 kyu) =======
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

1) Parameter - A non-negative integer, n.
2) Return - The factorial, n! = n * ( n - 1) * ( n - 2) * ... * 3 * 2 * 1
3) Examples - see tests
4) Return - see comments

*/

function factorial(n) {
  // Factorial for 1 or 0 evaluate to 1
  if ( n === 0 || n === 1) return 1;

  let factorial = 1;
  // Compute factorial by finding the product of the integers from n to 1
  for (let i = n; i > 0; i--) {
    factorial = factorial * i;
  }

  return factorial;
}

// Tests
console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);

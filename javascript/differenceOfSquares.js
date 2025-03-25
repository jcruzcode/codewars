/*
======= Difference of Squares (7 kyu) =======
Recreation of Project Euler problem #6

Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.
Example

For example, when n = 10:

    The square of the sum of the numbers is:

    (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025

    The sum of the squares of the numbers is:

    1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbers is: 3025 - 385 = 2640

1) Parameter - A positive integer, n.
2) Return -  The difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.
3) Examples - see tests
4) Pseudocode - see comments

*/

function differenceOfSquares(n) {
  // Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.
  let sum = 0,
    squareSum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    squareSum += i ** 2;
  }
  return sum ** 2 - squareSum;
}

// Tests
console.log(differenceOfSquares(5)   === 170, 'differenceOfSquares(5)')
console.log(differenceOfSquares(10)  === 2640, 'differenceOfSquares(10)')
console.log(differenceOfSquares(100) === 25164150, 'differenceOfSquares(100)')
/*
======= You're a square (7 kyu) =======
A square of squares

You like building blocks. You especially like building blocks that are squares.
And what you even like more, is to arrange them into a square of square building
blocks!

However, sometimes, you can't arrange them into a square.
Instead, you end up with an ordinary rectangle! Those blasted things! 
If you just had a way to know, whether you're currently working in vain… Wait!
That's it! You just have to check if your number of building blocks is a perfect
square.

Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the 
    square of an integer; in other words, it is the product of some integer with 
    itself.

The tests will always use some integral number, so don't worry about that in 
dynamic typed languages.

Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

1) Parameter - An integer, n.
2) Return - True if the square root of n is an integer, false otherwise.
3) Examples - see tests
4) Pseudocode - see comments
*/
const isSquare = function (n) {
  // Determine if the square root of n is an integer
  return Number.isInteger(Math.sqrt(n));
};

// Tests
console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
console.log(isSquare( 3), false, "3 is not a square number");
console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");

/*
======== Quadratic Coefficients Solver (8 kyu) ========
In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax^2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

Since there are infinitely many solutions to this problem, we fix a = 1.

Remember, the roots can be written like (x-x1) * (x-x2) = 0
Example

quadratic(1,2) = (1, -3, 2)

This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0
Example 2

quadratic(0,1) = (1, -1, 0)

This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0
Notes

    Inputs will be integers.
    When x1 == x2, this means the root has the multiplicity of two

1) Parameters - Two integers x1 and x2, representing the roots of a quadratic equation.
2) Return - The remaining coefficients b and c, given that a = 1, an array of numbers [a, b, c].
3) Examples - see tests
4) Pseudocode - see comments

*/
function quadratic(x1, x2) {
  // Calculate the remaining coefficients b and c given the two roots
  return [1, -(x2 + x1), x1 * x2];
}

// Tests
console.log(quadratic( 0,  1), [1, -1,   0]);
console.log(quadratic( 1,  1), [1, -2,   1]);
console.log(quadratic(-4, -9), [1, 13,  36]);
console.log(quadratic(-5, -4), [1,  9,  20]);
console.log(quadratic( 4, -9), [1,  5, -36]);
console.log(quadratic( 5, -4), [1, -1, -20]);

/*
=======  Is this a triangle? (7 kyu) =======
Implement a function that accepts 3 integer values a, b, c. 

The function should return true if a triangle can be built with the sides of 
given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 

1) Parameters - Three integers representing possible sides of a triangle.
2) Return - A boolean indicating whether or not the integers form a valid 
            triangle.
3) Examples - see tests
4) Pseudocode - see comments

*/

function isTriangle(a, b, c) {
  // A valid triangle satisfies the triangle inequality theorem:
  // Sum of the lengths of any two sides must be greater than the length of the 
  // third side
  return a + b > c && a + c > b && b + c > a;
}

// Tests

console.log(isTriangle(1,2,2), true);
console.log(isTriangle(7,2,2), false);
console.log()
console.log(isTriangle(4,5,1), false);
console.log(isTriangle(2,3,5), false);
console.log(isTriangle(2,3,1), false);
/*
======== Quadrants (8 kyu) ========
Task

Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). 

x and y are non-zero integers, therefore the given point never lies on the axes.

Examples

(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

Reference

There are four quadrants:

    First quadrant, the quadrant in the top-right, contains all points with positive X and Y
    
    Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
    
    Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
    
    Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

1) Parameters - Two non zero integers, x and y, that represent a point in the xy plane.
2) Return - The quadrant of the xy plane that the point (x,y) resides, as a number. 
3) Examples - see test
4) Pseudocode - see comments

*/

function quadrant(x, y) {
  // Determine the quadrant the point (x,y) resides based on the signs of x and y
  return x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
}

// Tests
console.log(quadrant(100,29) === 1);
console.log(quadrant(-44, 2) === 2);
console.log(quadrant(-2, -4) === 3);
console.log(quadrant(234,-3) === 4);
console.log(quadrant(-25,100) === 2);

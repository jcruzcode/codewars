/*
======== Geometry Basics: Distance between points in 2D (8 kyu) ========
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50 <= x,y <= 50.

Tests compare expected result and actual answer with tolerance of 1e-6.

1) Parameters - Two Point objects, a & b.
2) Return - The cartesian distance between two points in the xy plane, as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
function distanceBetweenPoints(a, b) {
  // Calculate distance between points a & b in the xy plane
  return Math.sqrt(Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(
  distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)),
  10.728001
);

/*
======== Localize The Barycenter of a Triangle (8 kyu) ========
The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. 

The three medians of a triangle intersect at the same point, called the barycenter or the centroid. 

Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three 
different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, 
(rounded result).

1) Parameters - The numbers representing vertices of a triangle, p1, p2, and p3.
2) Return - The coordinates [x0,y0] of the barycenter of the triangle as numbers
            in an array.
3) Examples - see tests
4) Pseudocode - see comments

*/
function barTriang(p1, p2, p3) {
  // Calculate the x and y coordinates of the barycenter of the given vertices
  const y0 = (p1[1] + p2[1] + p3[1]) / 3;
  const x0 = (p1[0] + p2[0] + p3[0]) / 3;
  // Ensure the coordinates are floating point numbers fixed to 4 decimal places
  return [+x0.toFixed(4), +y0.toFixed(4)];
}

// Tests
console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
console.log(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
console.log(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
console.log(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
console.log(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);

/*
======== Find the Slope (8 kyu) ========
Given an array of 4 integers

[a,b,c,d] representing two points (a, b) and (c, d), 
return a string representation of the slope of the 
line joining these two points.

For an undefined slope (division by 0), return undefined. 

Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

1) Parameters - An array of four integers representing two sets of x,y coordinates (x1, y1) and (x2, y2).
2) Return - The floor of the slope of the line connecting the two points or "undefined" when x doesn't change.
3) Examples - see tests
4) Pseudocode - see comments

*/

function slope(points) {
  // Calculate change in x and y coordinates from
  // the first point to the second point
  const deltaX = points[2] - points[0];
  const deltaY = points[3] - points[1];
  // Slope is undefined if there is no change in the x-coordinate
  // Otherwise, calculate the slope of the line and return the floor as a string
  return deltaX === 0 ? "undefined" : Math.floor(deltaY / deltaX).toString();
}

// Tests
console.log( slope([19,3,20,3]), "0" );
console.log( slope([2,7,4,-7]), "-7" );
console.log( slope([10,50,30,150]), "5" );
console.log( slope([15,45,12,60]), "-5" );
console.log( slope([10,20,20,80]), "6" );
console.log( slope([-10,6,-10,3]), "undefined" );
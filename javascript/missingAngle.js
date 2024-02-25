/*
====== Missing Angle (6 kyu) ======
Below is a right-angled triangle:

  |\
  | \
  |  \
  |   \ 
o |    \ h 
  |     \
  |    θ \
  |_______\ 
     a

Your challange is to write a function that calculates the angle θ in degrees to 
the nearest integer. 

You will be given three arguments representing each side: o, h and a. 

One of the arguments equals zero. 

Use the length of the two other sides to calculate θ. 

You will not be expected to handle any erronous data in your solution.

1) Parameters - Three numbers representing each side of a right triangle.
                One side will be zero.
                o - representing the side opposite the hypotenuse 
                a - representing the side adjacent to the hypotenuse
                h - representing the hypotenuse 
2) Returns  - Given the two non-zero sides, return the angle θ in degrees.
3) Examples - see test
4) Pseudocode - See comments

*/
/*
Geometry of Right Triangles (refer to figure above)

sin θ = o / h, therefore θ = arcsin(o / h)

Similarly, 

θ  = arccos(a / h) & θ = arctan(o / a)
*/
function missingAngle(h, a, o) {
  // Calculate the angle in radians given two non-zero sides
  let angle;

  h === 0
    ? (angle = Math.atan(o / a))
    : a === 0
    ? (angle = Math.asin(o / h))
    : (angle = Math.acos(a / h));

  // Convert the angle from radians to degrees
  angle *= 180 / Math.PI;

  return Math.round(angle);
}

// Tests
console.log(missingAngle(0, 400, 300), 37);
console.log(missingAngle(5, 4, 0), 37);
console.log(missingAngle(8, 0, 5), 39);
console.log(missingAngle(16.7, 0, 12.3), 47);
console.log(missingAngle(7, 5, 0), 44);

/*
======== Geometry Basics: Cirlce Area in 2D (8 kyu) ========
This series of katas will introduce you to basics of doing geometry with computers.

Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
The Circle class can be seen below:

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

And the Point class can be seen below:

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

*/

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function circleArea(circle) {
  // Calculate the area of a circle of a given radius
  return Math.PI * circle.radius ** 2;
}

// Tests
console.log(circleArea(new Circle(new Point(10, 10), 30)), 2827.433388);
console.log(circleArea(new Circle(new Point(25, -70), 30)), 2827.433388);
console.log(circleArea(new Circle(new Point(-15, 5), 0)), 0);
console.log(circleArea(new Circle(new Point(-15, 5), 12.5)), 490.873852);
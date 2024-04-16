/*
======== Area of a Square (8 kyu) ========
Complete the function that calculates the area of the red square, when the 
length of the circular arc A is given as the input. 

Return the result rounded to two decimals.

1) Parameters - A number, A, representing the length of the circular arc.
2) Return - The area of the red square.
3) Examples - see tests
4) Pseudocode - see comments

*/

function squareArea(A) {
  // The circumfrence of a circle is 4 times the arc length.
  // 2 * PI * radius = 4 * A
  // The length of one side of the red square is equal to radius.
  // The area of the red square is radius squared.
  return ((2 * A) / Math.PI) ** 2;
}

// Tests
console.log(squareArea(Math.PI),     4  );
console.log(squareArea(2 * Math.PI), 16 );
console.log(squareArea(3 * Math.PI), 36 );
console.log(squareArea(4 * Math.PI), 64 );
console.log(squareArea(5 * Math.PI), 100);
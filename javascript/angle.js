/*
======= Sum of angles (7 kyu) =======
Find the total sum of internal angles (in degrees) in an n-sided simple polygon.
N will be greater than 2.

1) Parameters - An integer greater than 2, n.
2) Return - The total sum of internal angles of an n-sided simple polygon.
3) Examples - see tests
4) Pseudocode - see comments

*/

function angle(n) {
  // Total sum of internal angles
  return (n - 2) * 180;
}

// Tests
console.log(angle(3) === 180);
console.log(angle(4) === 360);
console.log(angle(5) === 540);
console.log(angle(6) === 720);
console.log(angle(7) === 900);
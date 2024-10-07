/*
======= Simple beads count (7 kyu) =======

Two red beads are placed between every two blue beads. 
There are N blue beads.
After looking at the arrangement below work out the number of red beads.


Implement countRedBeads(n) so that it returns the number of red beads.
If there are less than 2 blue beads return 0. 

1) Parameter - A positive integer, n, representing the number of blue beads.
2) Return - The number of red beads.
3) Examples - see tests
4) Pseudocode - see comments

*/
function countRedBeads(n) {
  // Find the number of red beads
  return n < 2 ? 0 : (n - 1) * 2;
}

// Tests
console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);
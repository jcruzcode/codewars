/*
======== What's the real floor? (8 kyu) ========
Americans are odd people: in their buildings, the first floor 
is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns 
the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th 
floor being removed, the numbers move down to take their place. 

In case of above 13, they move down by two because there are two 
omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here
Examples

1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

1) Parameters - An integer representing the floor number in a building
2) Return - The floor number in the American system
3) Examples - see tests
4) Pseudocode - see comments

*/

function getRealFloor(n) {
  // n between 1 and 13, returns n - 1
  // n greater than or equal to 13, returns n - 2
  // negative n returns n
  // Otherwise return 0
  return n > 1 && n < 13 ? n - 1 : n >= 13 ? n - 2 : n < 0 ? n : 0;
}

console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);

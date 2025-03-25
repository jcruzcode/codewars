/*
======== Grasshopper - Terminal game move function (8 kyu) ========
Terminal game move function

In this game, the hero moves from left to right. 

The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and 
the roll (1-6) and return the new position.

Example:

move(3, 6) should equal 15

1) Parameters - The player's position and the number rolled, as numbers.
2) Return - The player's new position as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
function move(position, roll) {
  // Add twice the value of the roll to the current position
  return position + 2 * roll;
}

// Tests
console.log(move(0, 4) === 8);
console.log(move(3, 6) === 15);
console.log(move(2, 5) === 12);
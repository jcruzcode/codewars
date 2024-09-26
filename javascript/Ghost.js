/*
======== Color Ghost (8 kyu) ========
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of 'white' or 'yellow' or 'purple' or 'red' when instantiated

ghost = new Ghost();
ghost.color //=> 'white' or 'yellow' or 'purple' or 'red'

1) Parameters - None
2) Return - A random color, 'white' or 'yellow' or 'purple' or 'red', as a string.
3) Examples - see tests
4) Pseudocode - see comments

*/
var Ghost = function () {
  const colors = ["white", "yellow", "purple", "red"];
  const index = Math.floor(Math.random() * 4); 
  this.color = colors[index]; // Choose color based on random integer from 1-4
};

// Tests
let colors = ['white', 'yellow', 'purple', 'red'];
console.log(colors.includes(new Ghost().color));

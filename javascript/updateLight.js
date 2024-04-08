/*
======== Thinkful - Logic Drills: Traffic light (8 kyu) ========
You're writing code to control your town's traffic lights. You need a function 
to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the 
current state of the light and returns a string representing the state the 
light should change to.

For example, when the input is green, output should be yellow.

1) Parameter - A string representing the current state of the traffic light
2) Return - The next state of the traffic light
3) Examples - see tests
4) Pseudocode - see comments

*/

function updateLight(current) {
  // There are three possible ways to change the state of the traffic light
  // Green turns yellow
  // Yellow turns red
  // Red turns green
  return current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
}
// Tests
console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");

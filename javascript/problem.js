/*
======== Super Duper Easy (8 kyu) ========
Make a function that returns the value multiplied by 50 and increased by 6.
If the value entered is a string it should return "Error".

1) Parameter - A value of number of string type.
2) Return - The value multiplied by 50 and increased by 6 if a value of type
            number. A value of type string returns "Error".
3) Examples - see tests
4) Pseudocode - see comments

*/

function problem(x) {
  // Return "Error" for string input
  // Otherwise multiply by 50 and add 6 to given value
  return typeof x === "string" ?  "Error" : x * 50 + 6;
}

// Tests
console.log(problem("Hello"), "Error");
console.log(problem("Super"), "Error");
console.log(problem("Duper"), "Error");
console.log(problem(20), 1006);
console.log(problem(1), 56);

/*
======= Say hello! (7 kyu) =======
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null

1) Parameter - A string, name.
2) Return - A greeting if name exists, otherwise return null.
3) Examples - see tests
4) Pseudocode - see comments

*/
function greet(name) {
  // Check if name is non empty
  return name ? `hello ${name}!` : null;
}

// Tests
console.log(greet("jon") === "hello jon!");
console.log(greet("") === null);

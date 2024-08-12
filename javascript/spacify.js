/*
======= Spacify (7 kyu) =======
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

1) Parameters - A string, str.
2) Return - The given string with spaces inserted between each character.
3) Examples - see tests
4) Pseudocode - see comments

*/
function spacify(str) {
  // Insert a space between each character in str
  return str.split("").join(" ");
}

// Tests
console.log(spacify('hello world') === 'h e l l o   w o r l d');
console.log(spacify('12345') === '1 2 3 4 5');
console.log(spacify('group') === "g r o u p");
console.log(spacify('spacify!') === "s p a c i f y !");
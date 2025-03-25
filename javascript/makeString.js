/*
======= Return String of First Characters (7 kyu) =======
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

'This Is A Test' ==> 'TIAT'

Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

1) Parameter - A string, s.
2) Return - A new string composed of only the first character of each word in s.
3) Examples - see tests
4) Pseudocode - see comments
*/
function makeString(s) {
  return s
    .split(" ") // split into an array of words
    .map((word) => word[0]) // keep only the first character of each word
    .join(""); // form string with remaining characters
}

// Tests
console.log(makeString("sees eyes xray yoat") === "sexy");
console.log(makeString("brown eyes are nice") === "bean");
console.log(makeString("cars are very nice") === "cavn");
console.log(makeString("kaks de gan has a big head") === "kdghabh");

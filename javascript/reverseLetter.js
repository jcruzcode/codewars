/*
======= Simple Fun #176: Reverse Letter (7 kyu) =======
Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string

1) Parameter - A string, str.
2) Return - The input string reversed with only alphabetic characters kept.
3) Examples - see tests
4) Pseudocode - see comments

*/
function reverseLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  // Reverse str and omit all non-alphabetic characters
  return str
    .split("")
    .reverse()
    .filter((char) => letters.includes(char))
    .join("");
}

// Tests
console.log(reverseLetter("krishan"), "nahsirk");
console.log(reverseLetter("ultr53o?n"), "nortlu");
console.log(reverseLetter("ab23c"), "cba");
console.log(reverseLetter("krish21an"), "nahsirk");

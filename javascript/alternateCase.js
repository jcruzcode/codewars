/*
======== Alternate case (7 kyu) =======
Write function alternateCase which switch every letter in string 
from upper to lower and from lower to upper. 

E.g: Hello World -> hELLO wORLD

1) Parameter - A string, s.
2) Return - A string in which every letter in string is switched
            from upper to lower and from lower to upper.
3) Examples - see tests
4) Pseudocode - see comments 

*/
function alternateCase(s) {
    // Split the string in to an array of characters and switch
    // the case of each letter from lower to upper, and vice versa,
    // then join the characters of the array to form a string
  return s
    .split("")
    .map((char) => {
      return char.charCodeAt() >= 65 && char.charCodeAt() <= 90
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join("");
}

// Tests
console.log(alternateCase("abc")         === "ABC");
console.log(alternateCase("ABC")         === "abc");
console.log(alternateCase("Hello World") === "hELLO wORLD"); 
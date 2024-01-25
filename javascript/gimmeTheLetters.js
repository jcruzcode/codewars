/*
======= From A to Z (7 kyu) =======
Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.

Notes

    A hyphen will separate the two letters in the string.
    You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).


Note that if the range is given in capital letters, return the string in capitals also!

1) Parameters - a string containing two letters, upper or lowercase, separated by a dash, i.e. 'a-z'. 
2) Return - A string cointaining the letters arranged alphabetically from the first letter to the second. Make sure the case matches the input.
3) Examples - see test
4) Pseudocode - see comments

*/

function gimmeTheLetters(sp) {
  // Split sp into an array of letters
  const letters = sp.split("-");
  // Check if the letters are the same
  if (letters[0] === letters[1]) return letters[0];
  // Get the UTF-16 character code for both letters
  const startCode = letters[0].charCodeAt();
  const endCode = letters[1].charCodeAt();

  let range = '', nextCode = startCode;
  // Create a string of letters from the start
  // letter to the end letter
  while (nextCode <= endCode) {
    range += String.fromCharCode(nextCode);
    nextCode++;
  }

  return range;
  
}

// Single Letter Ranges
console.log(gimmeTheLetters("J-J") === "J");
console.log(gimmeTheLetters("Z-Z") === "Z");
console.log(gimmeTheLetters("a-a") === "a");

// Two Letter Ranges
console.log(gimmeTheLetters("a-b") === "ab");
console.log(gimmeTheLetters("y-z") === "yz");
console.log(gimmeTheLetters("H-I") === "HI");

// Three Letter Ranges
console.log(gimmeTheLetters("g-i") === "ghi");
console.log(gimmeTheLetters("W-Y") === "WXY");

// Longer Uppercase Ranges
console.log(gimmeTheLetters("Q-Z") === "QRSTUVWXYZ");
console.log(gimmeTheLetters("F-O") === "FGHIJKLMNO");
console.log(gimmeTheLetters("C-R") === "CDEFGHIJKLMNOPQR");

// Longer Lowercase Ranges
console.log(gimmeTheLetters("h-o") === "hijklmno");
console.log(gimmeTheLetters("e-k") === "efghijk");
console.log(gimmeTheLetters("a-q") === "abcdefghijklmnopq");

// Full Alphabet Ranges
console.log(gimmeTheLetters("a-z") === "abcdefghijklmnopqrstuvwxyz");
console.log(gimmeTheLetters("A-Z") === "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

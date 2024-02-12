/*
===== Simple Pig Latin (5 kyu) =====
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

1) Parameters - A string with space separated words
2) Returns - A string that has been converted to Pig Latin with the first letter of each word moved to the end with an "ay" added to the end of the word
3) Examples - see test Cases
4) Pseudocode - See comments
*/

function pigIt(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Split the string into words based on whitespace ' '
  const words = str.split(" ");

  // Split each word in words into individual letters
  let pigLatin;
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");
    // Check if the first character of the current word is a letter
    if (alphabet.includes(words[i][0])) {
      // Remove the first letter of the word and concat with "ay"
      pigLatin = words[i].shift() + "ay";
      // Add pigLatin to end of current word
      words[i].push(pigLatin);
    }
    // Join letters of current word
    words[i] = words[i].join("");
  }
  // Return string converted to Pig Latin
  return words.join(" ");
}

// Test Cases
console.log(pigIt("Pig latin is cool") === "igPay atinlay siay oolcay");
console.log(pigIt("This is my string") === "hisTay siay ymay tringsay");

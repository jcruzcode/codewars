/* 
====== Convert string to camel case (6 kyu) ======
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 

The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 

The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

1) Parameters - A string with dash/underscore delimited words.
2) Returns - The original string converted to camelCase. The first word within the output should be capitalized only if the original word was capitalized
3) Examples - see tests
4) Pseudocode - see comments

*/

function toCamelCase(str) {
  // Check for empty string
  if (str === "") return str;

  // Split string into words
  let words;
  // First split by underscore if present, otherwise split by dash
  str.includes("_") ? (words = str.split("_")) : (words = str.split("-"));

  // When underscores and dashes present, words may have dashes
  // Loop over each word and split if dash is present
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes("-")) words[i] = words[i].split("-");
  }

  // Unpack nested arrays
  words = words.flat();

  // Loop over words and capitalize the first letter of each word but the first
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
        words[i] = words[i].split(''); // split into letters
        words[i][0] = words[i][0].toUpperCase() // capitalize first letter
        words[i] = words[i].join('') // join letters together
    }
  }

  // Join words and return in camelCase
  return words.join('');
}

// Test cases
console.log(toCamelCase("") === "");
console.log(toCamelCase("the_stealth_warrior") === "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior") === "TheStealthWarrior");
console.log(toCamelCase("A-B-C") ===  "ABC");
console.log(toCamelCase("The_Stealth-Warrior") === "TheStealthWarrior");
console.log(toCamelCase("The-Stealth_Warrior") === "TheStealthWarrior");

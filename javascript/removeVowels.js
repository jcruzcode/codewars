/*
======= All Star Code Challenge #3 (7 kyu) =======
This Kata is intended as a small challenge for my students

Create a function that takes a string argument and returns that same string with all vowels removed (vowels are 'a', 'e', 'i', 'o', 'u').

Example (Input --> Output)

'drake' --> 'drk'
'aeiou' --> ''

remove_vowels('drake') // => 'drk'
remove_vowels('aeiou') // => ''

1) Parameter - A string, str.
2) Return - The string with all of the vowels removed.
3) Examples - see tests
4) Pseudocode - see comments

*/

const removeVowels = function (str) {
  // Remove the vowels from str and return
  const vowels = "AaEeIiOoUu";
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter))
    .join("");
};

// Tests
console.log(removeVowels("drake") === "drk");
console.log(removeVowels("aeiou") === "");
console.log(removeVowels("abcdef") === "bcdf");
console.log(removeVowels("2345") === "2345");
console.log(removeVowels("I Fly") === " Fly");

/*
======== Is there a vowel in there? (8 kyu) ========
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

1) Parameter - An array of numbers, a.
2) Return - An array, with numbers of a, except numbers equal to the character codes of lowercase vowels,
            replaced with the vowel as a string.
3) Examples - see tests
4) Pseudocode - see comments

*/
function isVow(a) {
  // Map character codes to lowercase vowels
  const vowels = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  // Make a copy of a
  const numbers = a.slice();
  // Replace the number in numbers with the lowercase vowel if it contains its character code
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in vowels) numbers[i] = vowels[numbers[i]];
  }

  return numbers;
}

// Tests
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
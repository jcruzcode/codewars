/*
======== Do you speak "English"? (8 kyu) ========
Given a string of arbitrary length with any ascii characters. 

Write a function to determine whether the string contains the whole word 
'English'.

The order of characters is important -- a string 'abcEnglishdef' is correct but 
"abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- 'eNglisH' is also correct.

Return value as boolean values, true for the string to contains 'English', false
for it does not.

1) Parameters - A string of arbitrary length with any ascii characters.
2) Return - A boolean indicating whether the string contains the word "English",
            regardless of case.
3) Examples - see tests
4) Pseudocode - see comments

*/

function spEng(sentence) {
  // Change sentence to all lowercase and see if the word english is inlcuded
  return sentence.toLowerCase().includes("english");
}

// Tests
console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);
console.log(spEng("This sentence doesn't not contain Engrish."), false)
console.log(spEng("Do you speak EnGlIsH?"), true);
console.log(spEng("Hola! Como Estas?"), false)
/*
======== Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence (8 kyu)==========
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

1) Parameters - A string, s.
2) Return - A string with all vowels replaced with "!".
3) Examples - see tests
4) Pseudocode - see comments

*/
function replace(s) {
  const vowels = "aeiouAEIOU";
  const chars = s.split("");

  // Replace vowels with !
  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) chars[i] = "!";
  }

  return chars.join("");
}

// Tests
console.log(replace("Hi!"), "H!!");
console.log(replace("!Hi! Hi!"), "!H!! H!!");
console.log(replace("aeiou"), "!!!!!");
console.log(replace("ABCDE"), "!BCD!");

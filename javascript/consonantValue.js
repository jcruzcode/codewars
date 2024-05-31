/*
====== Consonant value (6 kyu) ======
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. 

Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get:
"z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, 
d = 4 and cs = 3 + 19 = 22. The highest is 26.

solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 
18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

1) Parameter - A lowercase string that has alphabetic characters only and no 
               spaces.
2) Return -  The highest value of consonant substrings
3) Examples - see tests
4) Pseudocode - see comments

*/

function solve(s) {
  let str = "";
  const consonants = [];
  const vowels = ["a", "e", "i", "o", "u"];

  // Loop over s to form consonant strings
  for (let letter of s) {
    if (!vowels.includes(letter)) {
      str += letter; // concatenate letter with string if not vowel
      if (letter === s[s.length - 1]) {
        consonants.push(str); // add str to consonants if the last letter
      }
    }
    if (vowels.includes(letter) && str !== "") {
      consonants.push(str); // add str to consonants if a vowel is encountered
      str = ""; // reset str
    }
  }

  // strValue calculates and returns the value of the word passed to it
  const strValue = (word) => {
    return word
      .split("")
      .map((letter) => letter.charCodeAt() - 96)
      .reduce((acc, val) => acc + val, 0);
  };

  // Map each consonant string to its number value and return the highest number 
  return Math.max(...consonants.map((str) => strValue(str)));
}

// Tests
console.log(solve("zodiac"),26);
console.log(solve("chruschtschov"),80);
console.log(solve("khrushchev"),38);
console.log(solve("strength"),57);
console.log(solve("catchphrase"),73);
console.log(solve("twelfthstreet"),103);
console.log(solve("mischtschenkoana"),80);
console.log(solve("az"),26);
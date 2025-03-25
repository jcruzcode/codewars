"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = solve;
/*
======= Longest vowel chain (7 kyu) ========
The vowel substrings in the word codewarriors are o,e,a,io.

The longest of these has a length of 2.

Given a lowercase string that has alphabetic characters only
(both vowels and consonants) and no spaces, return the length
of the longest vowel substring.

Vowels are any of aeiou.

1) Parameter - A string that has alphabetic characters only
               and no spaces, s.
2) Return - A positive integer representing the longest vowel
            substring in s.
3) Examples - see tests
4) Pseudocode - see comments

*/
function solve(s) {
    const vowels = ["a", "e", "i", "o", "u"];
    let maxLength = 0, str = "";
    // Find the length of the longest vowel substring in s
    for (const letter of s) {
        if (vowels.includes(letter)) {
            str += letter;
        }
        else {
            if (maxLength < str.length)
                maxLength = str.length;
            str = "";
        }
    }
    return maxLength;
}
// Tests
console.log(solve("codewarriors"), 2);
console.log(solve("suoidea"), 3);
console.log(solve("ultrarevolutionariees"), 3);
console.log(solve("strengthlessnesses"), 1);
console.log(solve("cuboideonavicuare"), 2);
console.log(solve("chrononhotonthuooaos"), 5);
console.log(solve("iiihoovaeaaaoougjyaw"), 8);

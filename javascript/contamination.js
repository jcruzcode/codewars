/*
======== Contamination #1-String- (8 kyu) ========
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = 'abc'
character   = 'z'
text after  = 'zzz'

1) Parameters - Two strings, text and char.
2) Return - Char, as a string, repeated the same number of times as the
            amount of characters in text.
3) Examples - see tests
4) Pseudocode - see comments

*/
function contamination(text, char) {
  // Find the length of text and repeat char that number of times
  return char.repeat(text.length);
}

// Tests
console.log(contamination("abc", "z") === "zzz");
console.log(contamination("", "z") === "");
console.log(contamination("abc", "") === "");
console.log(contamination("_3ebzgh4", "&") === "&&&&&&&&");
console.log(contamination("//case", " ") === "      ");

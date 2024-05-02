/*
======== Sentence Smash (8 kyu) ========
Sentence Smash

Write a function that takes an array of words and smashes them together into a 
sentence and returns the sentence.

You can ignore any need to sanitize words or add punctuation, but you should add
spaces between each word. 

Be careful, there shouldn't be a space at the beginning or the end of the 
sentence!

Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

1) Parameter - An array of words as strings.
2) Return - The words joined as one string with a space betwen each word.
3) Example - see tests
4) Pseudocode - see comments

*/

function smash(words) {
  // Join array of words with space between each
  return words.join(" ");
}

// Tests
console.log(smash([]) === "");
console.log(smash(["hello"]) === "hello");
console.log(smash(["hello", "world"]) === "hello world");
console.log(smash(["hello", "amazing", "world"]) === "hello amazing world");
console.log(
  smash(["this", "is", "a", "really", "long", "sentence"]) ===
  "this is a really long sentence"
);

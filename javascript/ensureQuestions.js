/*
======== Ensure question (8 kyu) ========
Given a string, write a function that returns the string with a question mark ('?') appends to the end,
unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

'Yes' --> 'Yes?' 
'No?' --> 'No?'

1) Parameter - A string, s.
2) Return - s if it is already a question, otherwise return s with a question mark at the end.
3) Examples - see tests
4) Pseudocode - see comments

*/

function ensureQuestion(s) {
  // Return s if it is already a question
  // Otherwise add a question mark to the end of s
  return s.includes("?") ? s : `${s}?`;
}

// Tests
console.log(ensureQuestion("")      === "?");
console.log(ensureQuestion("Yes")   === "Yes?");
console.log(ensureQuestion("No?")   === "No?");
console.log(ensureQuestion("hello") === "hello?");
console.log(ensureQuestion("why")   === "why?")
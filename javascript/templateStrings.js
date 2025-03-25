/*
======== Template Strings (8 kyu) ========
Template Strings

Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings

Task

Your task is to return the correct string using the Template String Feature.

Input

Two Strings, no validation is needed.

Output

You must output a string containing the two strings with the word ```' are '```

Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

1) Parameters - Two strings, noun and adjective.
2) Return - A string using a template literal, combining noun and adjective with the string "are".
3) Examples - see tests
4) Pseudocode - see comments

*/
const templateStrings = function (noun, adjective) {
    // combine noun and adjective with the string "are"
    // using a template literal
  return `${noun} are ${adjective}`;
};

// Test
console.log(templateStrings("dogs", "friendly") === "dogs are friendly");
console.log(templateStrings("cats", "felines")  === "cats are felines");
console.log(templateStrings("apples", "fruits") === "apples are fruits");
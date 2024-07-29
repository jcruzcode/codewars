"use strict";
/*
======== Exclamation marks series #1: Remove an exclamation mark from the end of string  (8 kyu) ========
Description:

Remove an exclamation mark from the end of a string.

For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples

'Hi!'     ---> 'Hi'
'Hi!!!'   ---> 'Hi!!'
'!Hi'     ---> '!Hi'
'!Hi!'    ---> '!Hi'
'Hi! Hi!' ---> 'Hi! Hi'
'Hi'      ---> 'Hi'

1) Parameter - A string, s.
2) Return - If present, remove an exclamation mark from the end of a string, s, and return it.
3) Examples - see tests
4) Pseudocode - see comments

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = remove;
function remove(s) {
    // Remove exclamation mark at the end of s, if present.  
    return s[s.length - 1] === "!" ? s.slice(0, s.length - 1) : s;
}
// Tests
console.log(remove("Hi!") === "Hi");
console.log(remove("Hi!!!") === "Hi!!");
console.log(remove("!Hi") === "!Hi");
console.log(remove("!Hi!") === "!Hi");
console.log(remove("Hi! Hi!") === "Hi! Hi");
console.log(remove("Hi") === "Hi");

"use strict";
/*
======== Leonardo Dicaprio and Oscars (8 kyu) ========
You have to write a function that describe Leo:
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"

1) Parameter - A number called oscar.
2) Return - A string depending on the value of oscar.
3) Examples - see tests
4) Pseudocode - see comments

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.leo = void 0;
const leo = (oscar) => {
    // Return a string depending on the value of oscar
    return oscar === 88
        ? "Leo finally won the oscar! Leo is happy"
        : oscar === 86
            ? "Not even for Wolf of wallstreet?!"
            : oscar > 88
                ? "Leo got one already!"
                : "When will you give Leo an Oscar?";
};
exports.leo = leo;
// Tests
console.log((0, exports.leo)(89), "Leo got one already!");
console.log((0, exports.leo)(88), "Leo finally won the oscar! Leo is happy");
console.log((0, exports.leo)(87), "When will you give Leo an Oscar?");
console.log((0, exports.leo)(86), "Not even for Wolf of wallstreet?!");

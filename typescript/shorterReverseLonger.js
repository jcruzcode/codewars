"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shorterReverseLonger = shorterReverseLonger;
/*
======= shorter concat [reverse longer] (7 kyu) =======
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).

If a and b have the same length treat a as the longer producing b+reverse(a)+b

1) Parameters - Two string, a & b.
2) Return - A string of the form: shorter+reverse(longer)+shorter.
            If a and b have the same length treat a as the longer producing b+reverse(a)+b.
3) Examples - see tests
4) Pseudocode - see comments

*/
function shorterReverseLonger(a, b) {
    // Return a string of the format: shorter+reverse(longer)+shorter
    return a.length > b.length || a.length === b.length
        ? b + a.split("").reverse().join("") + b // a is longer than b or a and b are equal
        : a + b.split("").reverse().join("") + a; // b is longer than a
}
// Tests
console.log(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde");
console.log(shorterReverseLonger("hello", "bau"), "bauollehbau");
console.log(shorterReverseLonger("abcde", "fghi"), "fghiedcbafghi");

"use strict";
/*
======= Evens and Odds (7 kyu) =======
This kata is about converting numbers to their binary or hexadecimal representation:

    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.

Numbers will be positive. The hexadecimal string should be lowercased.

1) Parameter - A positive integer, n.
2) Return - A binary string if the number is even, otherwise return a hex string.
3) Examples - see tests
4) Pseudocode - see comments

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.evensAndOdds = evensAndOdds;
function evensAndOdds(n) {
    // If n is even, return a binary string.
    // Otherwise return a hex string.
    return n % 2 === 0 ? n.toString(2) : n.toString(16);
}
// Tests
console.log(evensAndOdds(2) === "10");
console.log(evensAndOdds(0) === "0");
console.log(evensAndOdds(13) === "d");
console.log(evensAndOdds(47) === "2f");
console.log(evensAndOdds(12800) === "11001000000000");
console.log(evensAndOdds(8172381723) === "1e71ca61b");

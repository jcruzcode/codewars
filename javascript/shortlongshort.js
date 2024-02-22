/*
======== Short Long Short (8 kyu) ======== 
Description:

Given 2 strings, a and b, return a string of the form short+long+short, 
with the shorter string on the outside and the longer string on the inside. 
The strings will not be the same length, but they may be empty ( zero length ).

("1", "22") --> "1221"
("22", "1") --> "1221"

1) Parameters - Two strings of differing length
2) Return - The strings concatenated with following form: short + long + short
3) Examples - see tests
4) Pseudocode - see comments

*/

function solution(a, b){
    // Concatentate a at both ends of b if length of a is less than that of b
    // Otherwise, concatentate b at both ends of a
    return a.length < b.length ? a + b + a : b + a + b;
}

// Tests
console.log(solution("1", "22"), "1221");
console.log(solution("22", "1"), "1221");

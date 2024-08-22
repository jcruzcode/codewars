"use strict";
/*
======= All Star Code Challenge #22 (7 kyu) ========
Create a function that takes an integer argument of seconds and converts the value
into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"

1) Parameter - A non-negative integer, seconds.
2) Return - A string displaying the number of seconds
            converted to hours and minutes.
3) Examples - see tests
4) Pseudocode - see comments

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTime = toTime;
function toTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60 - hours * 60);
    // A string displaying the number of seconds
    // converted to hours and minutes.
    return `${hours} hour(s) and ${minutes} minute(s)`;
}
// Tests
console.log(toTime(3600) === '1 hour(s) and 0 minute(s)');
console.log(toTime(3601) === '1 hour(s) and 0 minute(s)');
console.log(toTime(3500) === '0 hour(s) and 58 minute(s)');
console.log(toTime(323500) === '89 hour(s) and 51 minute(s)');
console.log(toTime(0) === '0 hour(s) and 0 minute(s)');

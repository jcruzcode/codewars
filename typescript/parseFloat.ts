/*
======== Parse float (8 kyu) ========
Write function parseFloat which takes an input and 
returns a number or null if conversion is not possible.

1) Parameter - A string, s.
2) Return - A number if a float can be parsed from s, otherwise null.
3) Examples - see tests
4) Pseudocode - see comments

*/
export function parseF(s: string): number | null {
  return Number.isNaN(Number.parseFloat(s)) ? null : Number.parseFloat(s);
}

// Tests
console.log(parseF("1"), 1.0);
console.log(parseF("true"), null);

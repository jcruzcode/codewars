/*
======== Century from Year (8 kyu) ========
Introduction

The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

1) Parameters
2) Returns
3) Examples
4) Pseudocode

*/
function century(year) {
  // Find number of centuries passed up to year 
  const centuries = year / 100;
  
  // Check if centuries is an integer, if so this is the correct century 
  // and should be returned.
  
  // Otherwise, centuries is a floating point number. So the number must be
  // adjusted to indicate the correct century by adding a year and truncating
  // the decimal portion.

  return Number.isInteger(centuries) ? centuries : Math.trunc(centuries + 1);
}

// Test cases
console.log(century(1705), 18, "Testing for year 1705");
console.log(century(1900), 19, "Testing for year 1900"); // false
console.log(century(1601), 17, "Testing for year 1601");
console.log(century(2000), 20, "Testing for year 2000"); // false
console.log(century(89), 1, "Testing for year 89");

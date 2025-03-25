/*
======== Formatting decimal places #0 (8 kyu) ========
Each number should be formatted that it is rounded to two decimal places. 

You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    

5.5589 is rounded 5.56   
3.3424 is rounded 3.34

1) Parameter - A floating point number, n.
2) Return - The number, n, rounded to two decimal places.
3) Examples - see tests
4) Pseudocode - see comments

*/
function twoDecimalPlaces(n) {
  // Format n to two decimal places
  return +n.toFixed(2);
}

// Tests
console.log(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
console.log(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");
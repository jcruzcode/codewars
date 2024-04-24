/*
======== 5 without numbers!! (8 kyu) ========
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following 
characters: 0123456789*+-/

1) Parameters - none
2) Return - The number 5, without using restricted characters
3) Examples - see test
4) Pseudocode - see comments

*/
function unusualFive() {
  // Find the character with UTF-16 code 625
  // Take the square root of 625 and get 25
  // Take the square root of 25 and get 5
  return Math.sqrt(Math.sqrt("ɱ".charCodeAt()));
}

// Test
console.log(unusualFive(), 5);

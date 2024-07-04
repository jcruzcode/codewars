/*
======== Parse nice int from char problem (8 kyu) ========
You ask a small girl,'How old are you?' 

She always says, 'x years old', where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. 

For example, the test input may be '1 year old' or '5 years old'. 

The first character in the string is always a number.

1) Parameter - A string, with the first character as a number 0-9
2) Return - The age as a number
3) Examples - see tests
4) Pseudocode - see comments

*/
function getAge(inputString) {
  return +inputString[0];
}

// Tests
console.log(getAge('4 years old'), 4);
console.log(getAge('9 years old'), 9);
console.log(getAge('1 year old'), 1);    
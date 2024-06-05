/*
======= Filter the number (7 kyu) =======
Filter the number

Oh, no! The number has been mixed up with the text. 

Your goal is to retrieve the number from the text, 

can you return the number back to its original state?

Task

Your task is to return a number from a string.

Details

You will be given a string of numbers and letters mixed up, 

you have to return all the numbers in that string in the order they occur.

1) Parameters - A string including numbers and letters
2) Return - All the numbers in the string in the order they occur
3) Examples - see tests
4) Pseudocode - see comments

*/

const filterString = function (value) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Split the string, value, into an array of characters
  // Filter the array to only include digits 
  // Join digits and return as a number
  return +value
    .split("")
    .filter((char) => digits.includes(char))
    .join("");
};

console.log(filterString("123"), 123, `For the input "123"`);
console.log(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);
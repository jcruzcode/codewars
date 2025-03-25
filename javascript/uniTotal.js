/*
======== ASCII Total (8 kyu) ========
You'll be given a string, and have to return the sum of all characters as an int. 

The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

1) Parameters - A string.
2) Return - The sum of all characters' ASCII values as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
function uniTotal(string) {
  return string
    .split("") // split into an array of characters
    .map((char) => char.charCodeAt()) // map each character to unicode value
    .reduce((sum, value) => sum + value, 0); // compute the sum of all values
}

// Tests
console.log(uniTotal("") === 0);
console.log(uniTotal("a") === 97);
console.log(uniTotal("b") === 98);
console.log(uniTotal("c") === 99);
console.log(uniTotal("d") === 100);
console.log(uniTotal("e") === 101);
console.log(uniTotal("aaa") === 291);
console.log(uniTotal("Mary Had A Little Lamb") === 1873);

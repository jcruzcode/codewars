/*
======== Evil or Odious (8 kyu) ========
The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function 
should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)

1) Parameters - An integer, n.
2) Return - A string indicating whether the number is evil or odious.
3) Examples - see tests
4) Pseudocode - see comments

*/
function evil(n) {
  return n
    .toString(2) // convert to binary string
    .split("") // split by digit
    .filter((num) => num === "1").length % // check if the number of 1's is even
    2 ===
    0
    ? "It's Evil!"
    : "It's Odious!";
}

// Tests
console.log(evil(1),"It's Odious!");
console.log(evil(2),"It's Odious!");
console.log(evil(3),"It's Evil!");
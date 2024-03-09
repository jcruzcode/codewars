/*
======== Reverse List Order (8 kyu) ========
In this kata you will create a function that takes in a list and returns a list 
with the reverse order.

Examples (Input -> Output)

* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

1) Parameters - An array of values
2) Return - The array in reverse order
3) Examples - see tests
4) Pseudocode - see comments

*/

function reverseList(list) {
  // reverse list using array method reverse()
  return list.reverse();
}

console.log(reverseList([1, 2, 3, "json", "node", 369, 0]), [
  0,
  369,
  "node",
  "json",
  3,
  2,
  1,
]);

console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);

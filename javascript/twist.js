/*
======== Kata Example Twist (8 kyu) ========
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.

1) Parameters - none
2) Return - An array of 1000 elements, each with the value "codewars"
3) Examples - see tests
4) Pseudocode - see comments

*/
// An array of 1000 elements, each with the value "codewars"
const websites = []
for (let i = 0; i < 1000; i++) {
  websites.push("codewars");
}

// Tests
console.log(websites.length > 0);
console.log(websites.length === 1000);
console.log(websites.every(e => e === "codewars"));
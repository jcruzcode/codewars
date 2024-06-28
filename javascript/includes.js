/*
======== You only need one - Beginner (8 kyu) ========
You will be given an array a and a value x. 

All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

1) Parameters - An array, a, and a value, x.
2) Return - A boolean value indicating whether a includes x.
3) Examples - see tests
4) Pseudocode - see comments

*/
function check(a, x) {
  // Check if a includes x
  return a.includes(x);
}
// Tests
console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);

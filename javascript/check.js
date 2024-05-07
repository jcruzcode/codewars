/*
======== No Loops 2 - You only need one (8 kyu) ========
*** No Loops Allowed ***

You will be given an array a and a value x. 

All you need to do is check whether the provided array contains the value, 
without using a loop.

Array can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.

With strings you will need to account for case.

1) Parameters - An array, a, and a value, x.
2) Return - True if the array a contains x, otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function check(a, x) {
  // Determine if a includes x or not
  return a.includes(x);
}

// Tests
console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

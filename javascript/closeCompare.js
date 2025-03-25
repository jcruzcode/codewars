/*
======= Compare with margin (8 kyu) ========
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. 
The function should return whether a is lower than, close to, or higher than b.

Please note the following:

    When a is close to b, return 0.
        For this challenge, a is considered 'close to' b if margin is greater than or equal to the absolute distance between a and b.

Otherwise...

    When a is less than b, return -1.

    When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.
Example 1

If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

This is because a and b are no more than 3 numbers apart.
Example 2

If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

This is because the distance between a and b is greater than 0, and a is less than b.

1) Parameters - Three integers, a, b, and margin.
2) Return - 0 if margin is greater than the absolute value of a - b, -1 if a < b,
            1 otherwise.
3) Examples - see tests
4) Pseudocode - see comments

*/
// Set margin to 0 if undefined
function closeCompare(a, b, margin = 0) {
  // Return 0 if margin is greater than the absolute value of a - b,
  // -1 if a < b, 1 otherwise.
  return margin >= Math.abs(a - b) ? 0 : a < b ? -1 : 1;
}

// Tests
console.log(closeCompare(4, 5), -1)
console.log(closeCompare(5, 5), 0)
console.log(closeCompare(6, 5), 1)
console.log(closeCompare(-6, -5), -1)
console.log(closeCompare(2, 5, 3), 0)
console.log(closeCompare(8.1, 5, 3), 1)
console.log(closeCompare(1.99, 5, 3), -1)

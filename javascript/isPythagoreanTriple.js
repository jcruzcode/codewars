/*
======== Pythagorean Triple (8 kyu) ========
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine 
if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2

Examples

[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers 
                - no matter how you arrange them, you will never find a way to satisfy 
                  the equation a2 + b2 = c2
Return Values

    For Python: return True or False
    For JavaScript: return true or false
    Other languages: return 1 or 0 or refer to Sample Tests.

1) Parameter - An array of integers, i.
2) Return - A boolean value: true if a pythagorean triple can be formed, else false.
3) Examples - see tests
4) Pseudocode - see comments

*/

function isPythagoreanTriple(i) {
  // Determine if the three integers in i can be arranged to form
  // a Pythagorean Triple
  return (
    i[0] ** 2 + i[1] ** 2 === i[2] ** 2 ||
    i[0] ** 2 + i[2] ** 2 === i[1] ** 2 ||
    i[2] ** 2 + i[1] ** 2 === i[0] ** 2
  );
}

// Tests


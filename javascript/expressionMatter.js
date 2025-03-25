/*
======== Expressions Matter (8 kyu) ========
Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). 

In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

Example

With the numbers 1, 2, and 3, here are some possible expressions:

    1 * (2 + 3) = 5
    1 * 2 * 3 = 6
    1 + 2 * 3 = 7
    (1 + 2) * 3 = 9

The maximum value that can be obtained is 9.

Notes

    The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
    You can use the same operation more than once.
    It is not necessary to use all the operators or parentheses.
    You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.


Input and Output Examples

    expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
    expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
    expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.

1) Parameters - Three integers, a, b, and c.
2) Return - The largest number obtained from the different combinations of a, b, and c with the operators +, (, ), and *.
3) Examples - see tests
4) Pseudocode - see comments

*/
function expressionMatter(a, b, c) {
  // Find the largest number from the different combinations of a, b, and c
  // with the operators +, (, ), and *
  return Math.max(
    a + b + c,
    a * (b + c),
    a * b + c,
    (a + b) * c,
    a * b * c,
    a + b * c
  );
}

// Tests
console.log(expressionMatter(2, 10, 3) === 60);
console.log(expressionMatter(1, 8, 3)  === 27);
console.log(expressionMatter(9, 7, 2)  === 126);
console.log(expressionMatter(1, 1, 10) === 20);
console.log(expressionMatter(9, 1, 1)  === 18);
console.log(expressionMatter(10, 5, 6) === 300);
console.log(expressionMatter(1, 10, 1) === 12);

/*
======= Sum of numbers from O to N (7 kyu) ========
We want to generate a function that computes the series starting from 0 and 
ending until the given number.

Example:

Input:

> 6

Output:

    0+1+2+3+4+5+6 = 21

Input:

> -15

Output:

    -15<0

Input:

> 0

Output:

    0=0


1) Parameters - A number, count.
2) Return - A string showing the sequence sum as a string or a string showing
            that number is less than or equal to zero.
3) Examples - see tests
4) Pseudocode - see comments

*/

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    // Strings to return if count is less than or equal to zero
    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0";

    // Generate integers from 0 to count as an array
    let numbers = [];
    for (let i = 0; i <= count; i++) {
      numbers.push(i);
    }

    // Compute sum of numbers
    const sum = numbers.reduce((acc, val) => acc + val, 0);

    // Return string sequence sum as a string from 0 to count
    return `${numbers.join("+")} = ${sum}`;
  };

  return SequenceSum;
})();

// Tests
console.log(SequenceSum.showSequence(6) === "0+1+2+3+4+5+6 = 21");
console.log(SequenceSum.showSequence(-15) === "-15<0");
console.log(SequenceSum.showSequence(0) === "0=0");
console.log(SequenceSum.showSequence(3) === "0+1+2+3 = 6");
console.log(SequenceSum.showSequence(-100) ===  "-100<0");

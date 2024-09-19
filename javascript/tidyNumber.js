/*
======= Tidy Number (Special Numbers Series #9) (7 kyu) =======
Definition

A Tidy number is a number whose digits are in non-decreasing order.
Task

Given a number, Find if it is Tidy or not .

Notes

    Number passed is always Positive .

    Return the result as a Boolean

Input >> Output Examples

tidyNumber (12) ==> return (true)

Explanation:

The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)

Explanation:

The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)

Explanation:

The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)

Explanation:

The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)

Explanation:

The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3 

1) Parameters - A positive integer, n.
2) Return - A boolean value: true if the number is tidy, else false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function tidyNumber(n) {
  // Split n into an array of digits
  const digits = n
    .toString()
    .split("")
    .map((digit) => +digit);

  for (let i = 1; i < digits.length; i++) {
    // If the preceding digit is greater than
    // the current one, the number is not tidy
    if (digits[i] < digits[i - 1]) return false;
  }

  // n is tidy 
  return true;
}

// Tests
console.log(tidyNumber(12),true);
console.log(tidyNumber(102),false);
console.log(tidyNumber(9672),false);
console.log(tidyNumber(2789),true);
console.log(tidyNumber(2335),true);

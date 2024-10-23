/*
======= Jumping Number (Special Numbers Series #4) (7 kyu) =======
Definition

Jumping number is the number that All adjacent digits in it differ by 1.

Task

Given a number, Find if it is Jumping or not.

Notes

    Number passed is always Positive .

    Return the result as String .

    The difference between ‘9’ and ‘0’ is not considered as 1 .

    All single digit numbers are considered as Jumping numbers.

Input >> Output Examples

jumpingNumber(9) ==> return "Jumping!!"

Explanation:

    It's single-digit number

jumpingNumber(79) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(89098) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(32) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

1) Parameter - A positive integer, n.
2) Return - A string indicating whether n is a jumping number or not.
3) Examples - see tests
4) Pseudocode - see comments

*/
function jumpingNumber(n) {
  // Single digit numbers are jumping numbers
  if (n < 10) return "Jumping!!";

  // Transform n into an array of digits, as numbers
  const digits = n
    .toString()
    .split("")
    .map((digit) => +digit);

  for (let i = 1; i < digits.length; i++) {
    // Adjacent digits that don't differ by 1 are not jumping numbers
    if (Math.abs(digits[i] - digits[i - 1]) !== 1) return "Not!!";
  }

  // Adjacent digits differ by 1
  return "Jumping!!";
}


// Tests
console.log(jumpingNumber(1)        === "Jumping!!");
console.log(jumpingNumber(7)        === "Jumping!!");
console.log(jumpingNumber(9)        === "Jumping!!");
console.log(jumpingNumber(23)       === "Jumping!!");
console.log(jumpingNumber(32)       === "Jumping!!");
console.log(jumpingNumber(79)       === "Not!!");
console.log(jumpingNumber(98)       === "Jumping!!");
console.log(jumpingNumber(8987)     === "Jumping!!");
console.log(jumpingNumber(4343456)  === "Jumping!!");
console.log(jumpingNumber(98789876) === "Jumping!!");
/*
======= Digits explosion (7 kyu) =======

Given a string made of digits [0-9], return a string where each digit 
is repeated a number of times equals to its value.

Examples

"312" should return "333122"

"102269" should return "12222666666999999999"

1) Parameters - A string, s.
2) Return - A string where each digit in s is repeated a number of 
            times equals to its value.
3) Examples - see tests
4) Pseudocode - see comments

*/
export function explode(s: string): string {
  const digits = s.split("");
  let str = "";

  for (let digit of digits) {
    // Make a string where digit is repeated 
    // a number of times equal to its value
    // for each digit in digits and concatenate
    // each string.
    str += digit.repeat(+digit);
  }

  return str;
}

// Tests
console.log(explode("123") === "122333");
console.log(explode("312") === "333122");
console.log(explode("102269") === "12222666666999999999");
console.log(explode("0") === "");
console.log(explode("000") === "");
/*
======= Substituting Variables Into Strings: Padded Numbers (7 kyu) =======
Complete the solution so that it returns a formatted string. 

The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

1) Parameter - A non negative integer, value.
2) Return - A string stating the value as a 5 digit zero padding string.
3) Examples - see tests
4) Pseudocode - see comments

*/
function solution(value) {
  // Ensure value is a zero padded string with length 5
  return `Value is ${value.toString().padStart(5, "0")}`;
}

// Tests
console.log(solution(5)    === "Value is 00005")
console.log(solution(1204) === "Value is 01204")
console.log(solution(109)  === "Value is 00109")
console.log(solution(0)    === "Value is 00000")

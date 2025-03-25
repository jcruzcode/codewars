/*
======== Type of sum (8 kyu) ========
Return the type of the sum of the two arguments

1) Parameters - Two arbitrary data types, a & b.
2) Return - The data type of the sum of a and b.
3) Examples - see tests
4) Pseudocode - see comments

*/

export function typeOfSum(a: any, b: any): string {
  // Return the type of the sum of the two arguments
  return typeof (a + b);
}

// Tests
console.log(typeOfSum(12, 1), "number");
console.log(typeOfSum("d", 1), "string");
console.log(typeOfSum(1, "a"), "string");
console.log(typeOfSum("dd", ""), "string");
console.log(typeOfSum(true, 1), "number");
console.log(typeOfSum("s", false), "string");
console.log(typeOfSum(null, 1), "number");
console.log(typeOfSum("s", null), "string");
console.log(typeOfSum(null, undefined), "number");
console.log(typeOfSum(undefined, "re"), "string");
console.log(typeOfSum(undefined, true), "number");
console.log(typeOfSum(null, false), "number");

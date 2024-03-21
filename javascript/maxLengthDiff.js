/*
======= Maximum Length Difference (7 kyu) =======
You are given two arrays a1 and a2 of strings. 

Each string is composed with letters from a to z. 

Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1.

Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

1) Parameters - Two arrays of strings containing strings with only letters a-z.
2) Return - An integer for the maximum absolute string length difference between 
            the two arrays.
3) Examples - see tests
4) Pseudocode - see comments 

*/

function mxdiflg(a1, a2) {
  // Check if a1 or a2 are empty
  if (a1.length === 0 || a2.length === 0) return -1;

  let maxLengthDiff = Math.abs(a1[0].length - a2[0].length);
  // Compare length differences between strings in a1 & a2
  // and find the max length difference
  for (let str of a1) {
    for (let item of a2) {
      if (Math.abs(str.length - item.length) > maxLengthDiff)
        maxLengthDiff = Math.abs(str.length - item.length);
    }
  }

  return maxLengthDiff;
}

// Tests
const s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1,s2), 13);

const arr1 = ["jonathan", "can", "ok"];
const arr2 = ["no", "josephine"];
console.log(mxdiflg(arr1,arr2), 7);

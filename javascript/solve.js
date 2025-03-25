/*
======= Unique string characters (7 kyu) =======
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve('xyab','xzca') = 'ybzc' 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

1) Parameter - Two strings, a and b.
2) Return - The characters, as a string, that are not common to both a and b.
3) Examples - see tests
4) Pseudocode - see comments

*/
function solve(a, b) {
  let str = "";
  // Find letters in a that are not found in b
  for (const letter of a) {
    if (!b.includes(letter)) str += letter;
  }
  // Find letters in b that are not found in a
  for (const char of b) {
    if (!a.includes(char)) str += char;
  }

  return str;
}

// Tests
console.log(solve("xyab","xzca")  === "ybzc");
console.log(solve("xyabb","xzca") === "ybbzc");
console.log(solve("abcd","xyz")   === "abcdxyz");
console.log(solve("xxx","xzca")   === "zca");

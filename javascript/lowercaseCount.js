/*
======== Regex count lowercase letters (8 kyu) ========
Your task is simply to count the total number of lowercase letters in a string.
Examples

'abc' ===> 3

'abcABC123' ===> 3

'abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~' ===> 3

' ===> 0;

'ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~' ===> 0

'abcdefghijklmnopqrstuvwxyz' ===> 26

1) Parameter - A string 
2) Return - The total number of lowercase letters in the string
3) Examples - see tests
4) Pseudocode - see comments

*/

function lowercaseCount(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for (let char of str) {
    // Count lowercase letters in str
    if (letters.includes(char)) count++;
  }

  return count;
}

// Tests
console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
console.log(lowercaseCount(""), 0)
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);

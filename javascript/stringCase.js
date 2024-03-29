/*
======= Fix string case (7 kyu) =======
In this Kata, you will be given a string that may have mixed uppercase and 
lowercase letters and your task is to convert that string to either lowercase 
only or uppercase only based on:

    - make as few changes as possible.
    - if the string contains equal number of uppercase and lowercase letters, 
      convert the string to lowercase.

For example:

solve("coDe") = "code". 
Lowercase characters > uppercase. Change only the "D" to lowercase.

solve("CODe") = "CODE". 
Uppercase characters > lowercase. Change only the "e" to uppercase.

solve("coDE") = "code". 
Upper == lowercase. Change all to lowercase.

1) Parameters - A string with a possible mix of uppercase and lowercase letters
2) Return - Convert string to all uppercase or lowercase based on above rules.
3) Examples - see tests
4) Pseudocode - see comments
*/

function solve(s) {
  let lowerCount = 0, upperCount = 0;

  // Loop over s and count the number of uppercase and lowercase letters
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      upperCount++;
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      lowerCount++;
    }
  }

  return lowerCount > upperCount || lowerCount === upperCount
    ? s.toLowerCase()
    : s.toUpperCase();
}
// Tests
console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
console.log(solve("APPlEs"), "APPLES");

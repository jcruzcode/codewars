/*
====== Split Strings (6 kyu) ======
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the 
missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

1) Parameters - A string of characters
2) Return - An array containing the parameter string split into pairs of two
characters. If the number of characters is odd, the last pair ends with an 
underscore.
3) Examples - See tests
4) Pseudocode - See comments

*/

function solution(str) {
  // Check for empty string
  if (str === "") return [];

  // Split string into characters
  const chars = str.split("");
  const pairs = [];
  let tmpStr = "";

  // Loop over chars and combine into char pairs then add to pairs array
  // Add underscore to last pair of chars if str length is odd
  for (let i = 0; i < chars.length; i++) {
    if (tmpStr.length < 2) tmpStr += chars[i];

    if (tmpStr.length === 2) {
        pairs.push(tmpStr);
        tmpStr = "";
    }

    if (tmpStr.length === 1 && i === chars.length - 1) {
        tmpStr += '_';
        pairs.push(tmpStr);
    }
  }

  return pairs;
}

// Tests
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);

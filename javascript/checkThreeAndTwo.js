/*
======= Check three and two (7 kyu) =======
Given an array with exactly 5 strings 'a', 'b' or 'c' (chars in Java, characters in Fortran, Chars in Haskell),
check if the array contains three and two of the same values.

Examples

['a', 'a', 'a', 'b', 'b'] ==> true  // 3x 'a' and 2x 'b'
['a', 'b', 'c', 'b', 'c'] ==> false // 1x 'a', 2x 'b' and 2x 'c'
['a', 'a', 'a', 'a', 'a'] ==> false // 5x 'a'

1) Parameter - An array of strings.
2) Return - A boolean: true if a string occurs three times and a different string occurs twice
            otherwise, false.
3) Examples - see tests
4) Pseudocode - see comments
*/

function checkThreeAndTwo(array) {
  const charCounts = {};
  // Count the occurrences of string in array
  for (const char of array) {
    charCounts[char] ? (charCounts[char] += 1) : (charCounts[char] = 1);
  }
  
  const counts = Object.values(charCounts);
  // Check that a string occurs 3 times and another twice
  return counts.includes(3) && counts.includes(2);
}

// Tests
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]) === true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]) === false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]) === false );
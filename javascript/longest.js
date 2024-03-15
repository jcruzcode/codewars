/*
======= Two to One (7 kyu) =======
Take 2 strings s1 and s2 including only letters from a to z. 

Return a new sorted string, the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

1) Parameters - Two strings, s1 and s2, including only letters from a to z
2) Return - A new sorted string, the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2
3) Examples - see tests
4) Pseudocode - see comments

*/
function longest(s1, s2) {
  // Concatenate s1 and s2 and split into an array of characters
  // Create a Set from the array to keep only unique characters
  const set = new Set((s1 + s2).split(""));
  // Make an array from set and sort the characters alphabetically
  const letters = Array.from(set);
  letters.sort();
  // Return letters as a string
  return letters.join("");
}

// Tests
console.log(longest("aretheyhere", "yestheyarehere") === "aehrsty");
console.log(
  longest("loopingisfunbutdangerous", "lessdangerousthancoding") ===
  "abcdefghilnoprstu"
);
console.log(
  longest("inmanylanguages", "theresapairoffunctions") ===
  "acefghilmnoprstuy"
);

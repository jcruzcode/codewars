/*
======== Sort and Start (8 kyu) ========
You will be given a list of strings.

You must sort it alphabetically (case-sensitive,
and based on the ASCII values of the chars) and 
then return the first value.

The returned value must be a string, and have 
"***" between each of its letters.

You should not remove or add elements from/to the 
array.

1) Parameter - An array of strings, s.
2) Return - Sort s alphabetically and return the first 
            element as a string with *** between each
            letter.
3) Examples - see tests
4) Psuedocode - see comments

*/
function twoSort(s) {
  // Sort strings alphabetically
  const words = s.sort();
  // Get first element and separate each letter with ***
  return words[0].split("").join("***");
}

// Tests
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) === 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) === 'a***r***e'); 

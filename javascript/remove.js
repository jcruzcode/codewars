/*
======== Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string (8 kyu) ========
Description:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 

For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples

'Hi!'     ---> 'Hi!'
'Hi!!!'   ---> 'Hi!'
'!Hi'     ---> 'Hi!'
'!Hi!'    ---> 'Hi!'
'Hi! Hi!' ---> 'Hi Hi!'
'Hi'      ---> 'Hi!'

1) Parameters - A string
2) Return - The string with all exclamation marks removed except for one at the end
3) Examples - see tests
4) Pseudocode - see comments

*/

function remove(string) {
  return (
    string
      .split("!") // Remove exclamation marks
      .join("") + "!" // Add one at the end
  );
}

// Tests
console.log(remove("Hi!")     === "Hi!");
console.log(remove("Hi!!!")   === "Hi!");
console.log(remove("!Hi")     === "Hi!");
console.log(remove("!Hi!")    === "Hi!");
console.log(remove("Hi! Hi!") === "Hi Hi!");
console.log(remove("Hi")      === "Hi!");
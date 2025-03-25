/*
======== Remove First and Last Character Part Two (8 kyu) ========
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except
the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the 
resulting string to be empty, return an empty value (represented as a generic value NULL 
in the examples below).

Examples

'1,2,3'      =>  '2'
'1,2,3,4'    =>  '2 3'
'1,2,3,4,5'  =>  '2 3 4'

''     =>  NULL
'1'    =>  NULL
'1,2'  =>  NULL

1) Parameters - A string with characters separated by commas.
2) Return - A string with the first and last character removed 
            and each character separated by a space instead of a comma.
            If the input string is empty or will be if first and last
            character is removed, return null.
3) Examples - see console.log
4) Pseudocode - see comments

*/
function array(string) {
  // Split by "," to get an array of characters
  const arr = string.split(",");

  // array is empty or will be due to removal of chars
  if (arr.length < 3) return null;

  // Remove first and last element for a valid array
  arr.pop();
  arr.shift();

  // Join remaining elements with a space
  return arr.join(" ");
}

// Tests
console.log(array(''                 ) === null);
console.log(array('1'                ) === null);
console.log(array('A1,B2'            ) === null);
console.log(array('1,2,3'            ) === '2');
console.log(array('1,2,3,4'          ) === '2 3');
console.log(array('A1,B2,C3,D4,E5'   ) === 'B2 C3 D4');
console.log(array('A,1,23,456,78,9,Z') === '1 23 456 78 9');

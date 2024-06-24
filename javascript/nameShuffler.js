/*
======== Name Shuffler (8 kyu) ========
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

'john McClane' --> 'McClane john'

1) Parameters - A string, str, representing a person's
                first and last name separated by a space
2) Return - A string in which the first and last names are swapped
3) Examples - see test
4) Pseudocode - see comments

*/
function nameShuffler(str) {
  // Split string into an array where white space occurs
  // Reverse the order of the elements
  // Join elements with space between
  return str.split(" ").reverse().join(" ");
}

// Tests
console.log(nameShuffler('john McClane') ===  'McClane john');
console.log(nameShuffler('Mary jeggins') ===  'jeggins Mary')
console.log(nameShuffler('tom jerry')    ===  'jerry tom')

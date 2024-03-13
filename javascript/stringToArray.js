/*
======== Convert a string to an array (8 kyu) ========
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

1) Parameters - A string of words each separated by a single whitespace.
2) Return - An array of words.
3) Examples - see tests
4) Pseudocode - see comments

*/

function stringToArray(string){
    // Convert string to an array of words by splitting the string where a 
    // single space ' ' is present
    return string.split(' ');
}

// Tests
console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
console.log(stringToArray("Be good to yourself"), ["Be", "good", "to", "yourself"]);
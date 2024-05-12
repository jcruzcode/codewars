/*
======== Add Length (8 kyu) ========
What if we need the length of the words separated by a space to be added at the 
end of that same word and have it returned as an array?

Example(Input --> Output)

'apple ban' --> ['apple 5', 'ban 3']
'you will win' -->['you 3', 'will 4', 'win 3']

Your task is to write a function that takes a String and returns an Array/list 
with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a
space.

1) Parameter - A string with words separated by a single whitespace
2) Return - An array of words with the length of each word added to each element
3) Examples - see test
4) Pseudocode - see comments 

*/

function addLength(str) {
    // Split str by single space delimiter " "
    // Add the length of each word to each element
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

// Tests
console.log(addLength("apple ban"), ["apple 5", "ban 3"]);
console.log(addLength('you will win'), ["you 3", "will 4", "win 3"]);
console.log(addLength("hello world"), ["hello 5", "world 5"]);
console.log(addLength("armadillo"), ["armadillo 9"]);
console.log(addLength("12$#%#6&fg"), ["12$#%#6&fg 10"]);

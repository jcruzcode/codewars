/*
======= Find the capitals (7 kyu) =======
Write a function that takes a single non-empty string of only lowercase and 
uppercase ascii letters (word) as its argument, and returns an ordered list 
containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]

1) Parameters - A string of only lowercase and uppercase ASCII letters.
2) Return - An ordered array of indices of all uppercase letters in the string.
3) Example - see tests
4) Pseudocode - see comments

*/

const capitals = (word) => {
    // Loop over each letter in the word and check if it's uppercase and add to 
    // an array of indices if so.
    const indices = [];
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) indices.push(i);
    }

    return indices;
}
// Tests
console.log(capitals("Jonathan"),[0]);
console.log(capitals("CodEWaRs"), [0,3,4,6]);
console.log(capitals("SpOngEbOb"), [0,2,5,7]);
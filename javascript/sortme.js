/*
====== Sort Arrays (Ignoring Case) (6 kyu) ======
Sort the given array of strings in alphabetical order, case insensitive. 

For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

1) Parameters - An array of strings
2) Return - The array of strings sorted in alphabetical order, case insensitive.
3) Examples - see test cases
4) Pseudocode - see comments
*/

function sortme(names) {
    // Check if names is empty
    if (names.length === 0) return [];

    // Check if only a single element
    if (names.length === 1) return names;

    const pairs = [];
    
    // Loop over names and apply lowercasing to each string
    // and add the original string and lowercase to pairs
    for (let name of names) {
        pairs.push([name, name.toLowerCase()]);
    }
    
    // Sort pairs by the lowercased strings
    pairs.sort((a,b) => {
        if(a[1] < b[1]) {
            return -1;
        } else if ( a[1] > b[1]) {
            return 1;
        } else return 0
    });
    
    const sorted = [];

    // Loop over pairs and add the original strings, now sorted in case 
    // insensitive alphabetical order, to sorted
    for (let pair of pairs) {
        sorted.push(pair[0]);
    }

    return sorted;
}
// Test Cases
console.log(sortme(["Hello","there","I'm","fine"]), ["fine", "Hello", "I'm", "there"]);
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"]);
console.log(sortme(["CodeWars"]), ["CodeWars"]);
console.log(sortme([]), []);
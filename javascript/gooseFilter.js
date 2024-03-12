/*
======== Filter out the geese (8 kyu) ========
Write a function that takes a list of strings as an argument and returns a 
filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your
solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial
array passed to your function, albeit with the 'geese' removed. 

Note that all of the strings will be in the same case as those provided, and 
some elements may be repeated.

1) Parameters - An array of strings
2) Return - A filtered list containing the same elements but with the 'geese' 
            removed.
3) Examples - see tests
4) Pseudocode - see comments

*/

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  const newBirds = [];

  // Loop over birds and check if any geese are present
  for (let bird of birds) {
    // Add to newBirds if not a geese
    if (!geese.includes(bird)) newBirds.push(bird);
  }

  return newBirds;
}

// Tests
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
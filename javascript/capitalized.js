/*
======= Indexed capitalization (7 kyu) =======
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

    capitalize('abcdef',[1,2,5]) = 'aBCdeF'
    capitalize('abcdef',[1,2,5,100]) = 'aBCdeF'. There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

Good luck!

1) Parameters - A string, s, and an array of integers, arr.
2) Return - A string in which all the letters of s which indices are given in
            in arr are capitalized.
3) Examples - see tests
4) Pseudocode - see comments

*/
function capitalize(s, arr) {
  // Split string into an array of letters
  const letters = s.split("");

  // For the indices included in arr, capitalize the letters in letters with the given indices
  for (let i = 0; i < letters.length; i++) {
    if (arr.includes(i)) letters[i] = letters[i].toUpperCase();
  }

  // Join array of letter into a  string
  return letters.join("");
}

// Tests
console.log(capitalize("abcdef",[1,2,5])         === 'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100])     === 'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50])    === 'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10]) === 'abRacaDabRA');
console.log(capitalize("codewarriors",[5])       === 'codewArriors');
console.log(capitalize("indexinglessons",[0])    === 'Indexinglessons');

/*
======= Alternate capitalization (7 kyu) =======
Given a string, capitalize the letters that occupy 
even indexes and odd indexes separately, and return 
as shown below. 

Index 0 will be considered even.

For example, capitalize('abcdef') = ['AbCdEf', 'aBcDeF'].

See test cases for more examples.

The input will be a lowercase string with no spaces.

1) Parameters - A lowercase string with no spaces and only letters
2) Return - An array with the first element being the input string
            with even indexed numbers being capitalized and the
            second element with odd indexed letters capitalized.
3) Examples - see tests
4) Pseudocode - see comments

*/
function capitalize(s) {
  // Split string into array of letters
  const oddcaps = s.split("");
  const evencaps = s.split("");

  // Loop over string and capitalize even and odd indexed
  // letters respectively
  for (let i = 0; i < s.length; i++) {
    i % 2 === 0
      ? (evencaps[i] = evencaps[i].toUpperCase())
      : (oddcaps[i] = oddcaps[i].toUpperCase());
  }

  // Combined array letters and return as array with two strings
  return [evencaps.join(""), oddcaps.join("")];
}
// Tests
console.log(capitalize("abcdef")      , ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewars")    , ["CoDeWaRs", "cOdEwArS"]);
console.log(capitalize("abracadabra") , ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
console.log(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"]);

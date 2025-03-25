/*
======= String Merge! (7 kyu) =======
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
Examples

('hello', 'world', 'l')       ==>  'held'
('coding', 'anywhere', 'n')   ==>  'codinywhere'
('jason', 'samson', 's')      ==>  'jasamson'
('wonderful', 'people', 'e')  ==>  'wondeople'

1) Parameter - Three strings, string1, string1, and letter.
2) Return - A string that is comprised of a single word that's a combination of both words, 
            merged at the point where the given letter first appears in each word. 
3) Examples - see tests
4) Pseudocode - see comments

*/

function stringMerge(string1, string2, letter) {
  return (
    // Concatenate the initial part of string1, until letter first appears,
    // with letter and the end part of string2, after the first appearance of letter
    string1.slice(0, string1.indexOf(letter)) +
    letter +
    string2.slice(string2.indexOf(letter) + 1)
  );
}

// Tests
console.log(stringMerge("person","here", "e") === "pere");
console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j") === "apowiejouh");
console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x") === "abcdefxxxyyyxyzz");
console.log(stringMerge("12345654321","123456789", "6") === "123456789");
console.log(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d") === "JiOdddasdfdfsd");
console.log(stringMerge("incredible","people", "e") === "increople");
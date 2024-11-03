/*
======= All Inclusive? (7 kyu) =======
Input:

    a string strng
    an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

    a boolean true if all rotations of strng are included in arr
    false otherwise

Examples:

contain_all_rots(
  'bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']) -> true

contain_all_rots(
  'Ajylvpy', ['Ajylvpy', 'ylvpyAj', 'jylvpyA', 'lvpyAjy', 'pyAjylv', 'vpyAjyl', 'ipywee']) -> false)

Note:

Though not correct in a mathematical sense

    we will consider that there are no rotations of strng == ''
    and for any array arr: contain_all_rots('', arr) --> true

Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

1) Parameters - A string, str, an an array of strings, arr.
2) Return - A boolean: true if all rotations of str are included in arr,
            otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function containAllRots(str, arr) {
  let letters,
    word = str;

  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(word)) return false;

    letters = word.split("");
    letters.unshift(letters.pop());
    word = letters.join("");
  }

  return true;
}

// Tests
console.log(containAllRots("", []), true);
console.log(containAllRots("", ["bsjq", "qbsj"]), true);
console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]),
  true
);
console.log(
  containAllRots("XjYABhR", [
    "TzYxlgfnhf",
    "yqVAuoLjMLy",
    "BhRXjYA",
    "YABhRXj",
    "hRXjYAB",
    "jYABhRX",
    "XjYABhR",
    "ABhRXjY",
  ]),
  false
);

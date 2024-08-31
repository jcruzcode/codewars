/*
======== Crash Override (8 kyu) ========
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:

    Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. 
    
    See the examples below for further details.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples

// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

Happy hacking!

1) Parameters - Two string, first and last, representing a first name and last name.
2) Return - A hacker name, as a  string, from the pre-loaded objects firstName and suranme.
            If the first letter of the names is not a alphabetical letter, return error
            message as a string.
3) Examples - see tests
4) Pseudocode - see comments

*/
function aliasGen(first, last) {
  // Check that first and last names start with a letter and are uppercase
  return first[0].toUpperCase() in firstName && last[0].toUpperCase() in surname
    ? `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}` // if so return hacker name
    : "Your name must start with a letter from A - Z."; // otherwise return error string
}

// Tests
console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
console.log(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");

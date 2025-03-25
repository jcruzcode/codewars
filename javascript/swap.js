/*
======= Changing letters (7 kyu) =======
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

1) Parameter - A string.
2) Return - A string that is the original string with all 
            lowercase letters capitalized.
3) Examples - see tests
4) Pseudocode - see comments

*/

function swap(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const chars = string.split("");

  for (let i = 0; i < chars.length; i++) {
    // Capitalize all lowercase letters found in string
    if (vowels.includes(chars[i])) chars[i] = chars[i].toUpperCase();
  }

  return chars.join("");
}

// Tests
console.log(swap(""           ) === "");
console.log(swap("   @@@"     ) === "   @@@");
console.log(swap("HelloWorld!") === "HEllOWOrld!");
console.log(swap("Sunday"     ) === "SUndAy");
console.log(swap("Codewars"   ) === "COdEwArs");
console.log(swap("Monday"     ) === "MOndAy");
console.log(swap("Friday"     ) === "FrIdAy");
console.log(swap("abracadabra") === "AbrAcAdAbrA");
console.log(swap("AbrAcAdAbrA") === "AbrAcAdAbrA");
console.log(swap("ABRACADABRA") === "ABRACADABRA");
console.log(swap("aBRaCaDaBRa") === "ABRACADABRA");

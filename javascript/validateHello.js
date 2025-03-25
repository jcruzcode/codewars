/*
======== Did she say hallo? (8 kyu) ========
You received a whatsup message from an unknown number.

Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

    hello - english
    ciao - italian
    salut - french
    hallo - german
    hola - spanish
    ahoj - czech republic
    czesc - polish

Notes

    you can assume the input is a string.
    to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
    function should be case insensitive to pass the tests
*/

function validateHello(greetings) {
  // Hello in different languages
  const hellos = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  
  // Check if any of the hellos are present in greetings
  for (let hello of hellos) {
    // Return true if one of the hellos are present
    if (greetings.toLowerCase().includes(hello)) return true;
  }
  // Return false if none of the hellos are present
  return false;
}

// Tests
console.log(validateHello("hello") === true);
console.log(validateHello("czesc") === true);
console.log(validateHello("This should return false.") === false);
console.log(validateHello("These greetings.") === false);
console.log(validateHello("HALLO HELLO hola") === true)

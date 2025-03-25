/*
======== Simple validation of a username with regex (8 kyu) ========
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).

1) Parameters - A string, username.
2) Return - True if the username is valid, otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function validateUsr(username) {
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789_";

  // Check that username meets length requirements
  if (username.length < 4 || username.length > 16) return false;

  // Check that username only contains valid characters
  for (let char of username) {
    if (!validChars.includes(char)) return false;
  }

  return true;
}

// Tests
console.log(validateUsr("asddsa") === true);
console.log(validateUsr("a") === false);
console.log(validateUsr("Hass") === false);
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas") === false);
console.log(validateUsr("") === false);
console.log(validateUsr("____") === true);
console.log(validateUsr("012") === false);
console.log(validateUsr("0123") === true);
console.log(validateUsr("1234567890abcdefg") === false);
console.log(validateUsr("p1pp1") === true);
console.log(validateUsr("asd43 34") === false);
console.log(validateUsr("asd43_34") === true);
console.log(validateUsr("abcd") === true);

/*
===== ROT13 (5 kyu) =====
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

1) Parameters - A string of characters
2) Return - A string encoded with the ROT13 cipher
            The substitution will only involve letters in lower and uppercase.
            Each letter is substituted with the letter 13 letters ahead of it.
3) Examples - see test
4) Pseudocode - see comments

*/
function rot13(message) {
  /* nextIndex take the index of the current letter and 
  returns the index of the replacement letter in the ROT13 cipher */
  
  function nextIndex(num) {
    // Number of letters in English alphabet
    const LETTERS = 26;

    // Compute the index of the letter used as a replacement via the ROT13 cipher
    let index = num + 13;

    // Go back to the beginning of the alphabet if past the index of 'z'
    if (index > 25) {
      index = index - LETTERS;
    }
    // Return the index of the letter used in ROT13
    return index;
  }

  // Create strings with all letters in alphabet
  // One lowercase and one uppercase
  // These strings will be used to test against the input
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const upper = alpha.toUpperCase();

  // Split the input message into characters
  const chars = message.split("");

  // Loop over chars and check for uppercase and lowercase letters
  let index, next;
  for (let i = 0; i < chars.length; i++) {
    // Check for lowercase letters
    if (alpha.includes(chars[i])) {
      // Find the index of the current character in the alphabet
      index = alpha.indexOf(chars[i]);
      // Find the index of the replacement letter
      next = nextIndex(index);
      // Replace the current character in chars
      chars[i] = alpha[next];

      // Check for uppcase letters - same as above
    } else if (upper.includes(chars[i])) {
      index = upper.indexOf(chars[i]);
      next = nextIndex(index);
      chars[i] = upper[next];
    }
  }
  // Return the string encoded with ROT13 cipher
  return chars.join("");
}

console.log(rot13("EBG13 rknzcyr.") === "ROT13 example.");
console.log(
  rot13("This is my first ROT13 excercise!") ===
    "Guvf vf zl svefg EBG13 rkprepvfr!"
);

/*
====== The Vowel Code (6 kyu) ======
Step 1: Create a function called encode() to replace all the lowercase vowels in
a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode('hello') would return 'h2ll4'. There is no need to worry 
about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into
vowels according to the same pattern shown above.

For example, decode('h3 th2r2') would return 'hi there'.

For the sake of simplicity, you can assume that any numbers passed into the 
function will correspond to vowels.

1) Parameters - A string containing letters and whitespace to either encode or
                decode.
2) Return - A decoded string or encoded string using the relevant scheme.
            Each vowel is encoded to the corresponding number and each number
            decodes to the corresponding vowel.
3) Examples - see tests
4) Pseudocode - see comments

*/

function encode(string) {
  // Encoding scheme
  const vowelCode = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5",
  };

  // Split string in to array of letters
  const letters = string.split("");

  // Replace each vowel in letters with the corresponding number in vowelCode
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] in vowelCode) letters[i] = vowelCode[letters[i]];
  }

  // Recombine letters
  return letters.join("");
}

function decode(string) {
  const chars = string.split("");
  // Decoding scheme
  const vowels = ["a", "e", "i", "o", "u"];
  const digits = ["1", "2", "3", "4", "5"];

  // Replace each digit in chars with the corresponding vowel
  for (let i = 0; i < chars.length; i++) {
    if (digits.includes(chars[i])) chars[i] = vowels[+chars[i] - 1];
  }

  return chars.join("");
}

// Tests
console.log(encode("hello") === "h2ll4");
console.log(encode("How are you today?") === "H4w 1r2 y45 t4d1y?");
console.log(
  encode("This is an encoding test.") === "Th3s 3s 1n 2nc4d3ng t2st."
);
console.log(decode("h2ll4") === "hello");
console.log(decode("1cgn3qdh1h5qqvjlq3vbt2ln") === "acgniqdhahuqqvjlqivbteln");
console.log(decode("3jb11mbmzytmfptznsg") ===  "ijbaambmzytmfptznsg");

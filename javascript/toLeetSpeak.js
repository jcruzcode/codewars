/*
======= ToLeetSpeak (7 kyu) =======
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak('LEET') returns '1337'

In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}

1) Parameter -  A string, str.
2) Return - A string with all of the original characters of str replaced with 1337 characters.
3) Examples - see tests
4) Pseudocode - see comments

*/
function toLeetSpeak(str) {
  const leet = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2",
  };

  const chars = str.split("");

  for (let i = 0; i < chars.length; i++) {
    // Replace letters in str with 1337 characters
    if (chars[i] in leet) chars[i] = leet[chars[i]];
  }

  return chars.join("");
}

// Tests
console.log(toLeetSpeak("LEET")                                        === "1337");
console.log(toLeetSpeak("CODEWARS")                                    === "(0D3W@R$");
console.log(toLeetSpeak("HELLO WORLD")                                 === "#3110 W0R1D");
console.log(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET")                  === "10R3M !P$UM D010R $!7 @M37");
console.log(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG") === "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06");
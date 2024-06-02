/*
====== How much hex is the fish (6 kyu) ======
How much is the fish! (- Scooter )

The ocean is full of colorful fishes. We as programmers want to know the 
hexadecimal value of these fishes.

Task

Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR 
them.

Return the result as an integer.

Input

The input is always a string, which can contain spaces, upper and lower case 
letters but no digits.

Example

fisHex("redlionfish") -> e,d,f -> XOR -> 12

1) Parameters - A string which can contain spaces, upper and lower case 
                letters but no digits.
2) Return - Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR 
            them and return the result as an integer.
3) Examples - see tests
4) Pseudocode - see comments

*/
function fisHex(name) {
  // Map hex letters to their decimal value
  const hexChars = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  // Take all hexadecimal valid characters (a,b,c,d,e,f) of the given name and XOR 
  // them and return the result as an integer.
  return name
    .toLowerCase() 
    .split("") 
    .filter((char) => char in hexChars)
    .map((letter) => hexChars[letter])
    .reduce((last, current) => last ^ current, 0);
}

// Tests
console.log(fisHex("pufferfish"), 1);
console.log(fisHex("puffers"), 14);
console.log(fisHex("balloonfish"), 14);
console.log(fisHex("blowfish"), 4);
console.log(fisHex("bubblefish"), 10);
console.log(fisHex("globefish"), 10);
console.log(fisHex("swellfish"), 1);
console.log(fisHex("toadfish"), 8);
console.log(fisHex("toadies"), 9);
console.log(fisHex("honey toads"), 9);
console.log(fisHex("sugar toads"), 13);
console.log(fisHex("sea squab"), 5);

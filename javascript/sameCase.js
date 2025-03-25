/*
======== Check same case (8 kyu) ========
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

1) Parameters - Two characters a and b as strings.
2) Return - A number: -1 for non-letters, 1 for same case letters,
            0 for different case letters.
3) Examples - see tests
4) Pseudocode - see comments

*/
function sameCase(a, b) {
  return a.charCodeAt() < 65 ||
    (a.charCodeAt() > 90 && a.charCodeAt() < 97) ||
    a.charCodeAt() > 122 ||
    b.charCodeAt() < 65 ||
    (b.charCodeAt() > 90 && b.charCodeAt() < 97) ||
    b.charCodeAt() > 122 // check for non-letter
    ? -1
    : (a.charCodeAt() >= 97 &&
        a.charCodeAt() <= 122 &&
        b.charCodeAt() >= 97 &&
        b.charCodeAt() <= 122) ||
      (a.charCodeAt() >= 65 &&
        a.charCodeAt() <= 90 &&
        b.charCodeAt() >= 65 &&
        b.charCodeAt() <= 90) // check for same case
    ? 1
    : 0; // both a and b are letters but different case
}

// Tests
console.log(sameCase("C", "B") === 1);
console.log(sameCase("b", "a") === 1);
console.log(sameCase("d", "d") === 1);
console.log(sameCase("A", "s") === 0);
console.log(sameCase("c", "B") === 0);
console.log(sameCase("b", "Z") === 0);
console.log(sameCase("\t", "Z"), -1);
console.log(sameCase("H", ":"), -1);

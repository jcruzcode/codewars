/*
    Longest palindrome (6 kyu)
    
    A palindrome is a series of characters that read the same forwards as 
    backwards such as "hannah", "racecar" and "lol".

    Challenge:

    Write a function that 
    1) Parameters - takes a string of characters alphanumeric (a to z, 0 - 9)
    2) Returns - The length, as an integer value, of longest alphanumeric 
                palindrome that could be made by combining the characters 
                in any order but using each character only once.

                The function should not be case sensitive.
    3) Examples - see test cases
    4) Pseudocode - see comments
*/
function longestPalindrome(str) {
  // Check if str has a length of 1
  if (str.length === 1) return 1;
  // Ensure argument provided is lowercase
  const input = str.toLowerCase();
  const charCounts = {};
  // Create function that checks if a character is alphanumeric (a-z, 0-9)
  const isAlpha = (char) => {
    const code = char.charCodeAt();
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) return true;

    return false;
  };
  // Count the occurences of each alphanumeric character detected
  for (let char of input) {
    if (isAlpha(char)) {
      charCounts[char] ? (charCounts[char] += 1) : (charCounts[char] = 1);
    }
  }

  let lengthOfPal = 0;
  // Count the number of alphanumeric characters for the longest palindrome
  for (let key in charCounts) {
    let remainder = charCounts[key] % 2;
    // If the count for a given character is even, add that number to the
    // total palindrome length
    if (remainder === 0) lengthOfPal += charCounts[key];
    // If the count for a given character is greater than 2 and odd, find the
    // difference between the count and the remainder and add to the total
    // palindrome length
    if (charCounts[key] > 2 && remainder !== 0) {
      lengthOfPal += charCounts[key] - remainder;
    }
  }

  // If any of the character counts is 1, at it to the total palindrome length
  if (Object.values(charCounts).includes(1)) lengthOfPal += 1;

  return lengthOfPal;
}
// "Remember a string of length 1 is still the same backwards as forwards"
console.log(longestPalindrome("B"), 1);

// "Don't forget to make it not case sensitive"
console.log(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"), 25);

// "Remember to include alphanumeric characters only"
console.log(longestPalindrome("xyz__a_/b0110//a_zyx"), 13);

// Another one
console.log(longestPalindrome("aabbcc_yYx_"), 9);

/*
======= The old siwtcheroo (7 kyu) =======
Write a function

vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

1) Parameters - A string str.
2) Return - Using str, replace vowels with the index value, and return the new string.
3) Examples - see tests
4) Pseudocode - see comments

*/
const vowel2index = (str) => {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    // Replace vowels in chars with index value (starting with 1)
    if (vowels.includes(chars[i])) chars[i] = i + 1;
  }
  // Join chars to form string
  return chars.join("");
};

// Tests
console.log(vowel2index('this is my string') ==='th3s 6s my str15ng');
console.log(vowel2index('Codewars is the best site in the world') === 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
console.log(vowel2index('Tomorrow is going to be raining') === 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
console.log(vowel2index('') === '');

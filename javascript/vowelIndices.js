/*
======= Find the vowels (7 kyu) =======
We want to know the index of the vowels in a given word, for example, 
there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES

    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!)

1) Parameters - A string, word.
2) Return - An array of integers, representing the indices of vowels
            in word.
3) Examples - see tests
4) Pseudocode - see comments

*/
function vowelIndices(word) {
  const vowels = "aeiouyAEIOUY";
  const indices = [];
  for (let i = 0; i < word.length; i++) {
    // Add index to indices if vowel is found
    if (vowels.includes(word[i])) indices.push(i + 1);
  }
  return indices;
}

// Tests
console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1,5]);
console.log(vowelIndices("super"), [2,4]);
console.log(vowelIndices("orange"), [1,3,6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);

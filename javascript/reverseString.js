/*

======== Reversing Words in a String (8 kyu) ========
You need to write a function that reverses the words in a given string. 
A word can also fit an empty string. 
If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary 
whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

Happy coding!

1) Parameter - A string of words each separated by a single whitespace.
2) Return - A string that is the reverse order of words from the original string.
3) Examples - see tests
4) Pseudocode - see comments

*/
function reverse(string) {
  return string
    .split(" ") // Split into an array of words, separated a by single space
    .reverse()  // Reverse the array of words
    .join(" "); // Combine words to form a string in reverse word order
}
// Tests
console.log(reverse("I am an expert at this"), "this at expert an am I");
console.log(reverse("This is so easy"), "easy so is This");
console.log(reverse("no one cares"), "cares one no");
console.log(reverse(""), "");
console.log(reverse("CodeWars"), "CodeWars");

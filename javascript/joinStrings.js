/*
======== ES6 String Addition (8 kyu) ========
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. 

Your task is to find out what this is and write a function that will add two 
strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. 

I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

1) Parameters - Two strings, string1 & string2. If not given a string, cast to string.
2) Return - The two strings joined with a single whitespace.
3) Examples - see tests
4) Pseudocode - see comments

*/
function joinStrings(string1, string2) {
  // Join two strings together with a single whitespace separating
  return `${string1} ${string2}`;
}

// Tests
console.log(joinStrings("string1", "string2") === "string1 string2");
console.log(joinStrings("testing", "testing") === "testing testing");
console.log(joinStrings(134, 234) === "134 234");

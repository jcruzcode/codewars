/*
======= Remove anchor from URL (7 kyu) =======
Complete the function/method so that it returns the url with anything after the 
anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

1) Parameters - a URL as a string
2) Return - The portion of the string before the anchor #, if it exists.
            Otherwise, return the URL.
3) Examples - see tests
4) Pseudocode - see comments
*/

function removeUrlAnchor(url) {
  // Check if url contains anchor (#).
  // If so, split url into array with
  // # as the delimiter and return the
  // first element.
  // Otherwise return the url as is .
  return url.includes("#") ? url.split("#")[0] : url;
}

// Tests
console.log(removeUrlAnchor("https://www.google.com#home") === "https://www.google.com")
console.log(removeUrlAnchor("www.codewars.com/thispagedoesntexist#about") === "www.codewars.com/thispagedoesntexist")
console.log(removeUrlAnchor("www.funnyjunk.com/#wishthisexistedstill") === "www.funnyjunk.com/")
console.log(removeUrlAnchor("www.geocities.com#") === "www.geocities.com")
console.log(removeUrlAnchor("www.napster.com") === "www.napster.com")

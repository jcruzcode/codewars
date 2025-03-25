/*
====== I'm longer than you! (6 kyu) ======
Create a function longer that accepts a string and sorts the words in 
it based on their respective lengths in an ascending order. 
 
If there are two words of the same lengths, sort them alphabetically. 
Look at the examples below for more details.

longer('Another Green World') => Green World Another
longer('Darkness on the edge of Town') => of on the Town edge Darkness
longer('Have you ever Seen the Rain') => the you Have Rain Seen ever

Assume that only only Alphabets will be entered as the input.

Uppercase characters have priority over lowercase characters. 

That is,

longer('hello Hello') => Hello hello


1) Parameters - A string containing only letters and whitespace.
2) Return - A string with the words sorted based on their respective 
            lengths in an ascending order. If there are two words of
            the same lengths, sort them alphabetically. 
3) Examples - see tests
4) Pseudocode - see comments

*/

function longer(s) {
  return s
    .split(" ") // split string to an array of words
    .sort((a, b) => {
      return a.length !== b.length
        ? a.length - b.length // sort based on word length
        : a > b // otherwise sort alphabetically 
        ? 1
        : a < b
        ? -1
        : 0;
    })
    .join(" "); // create string of words separated by spaces
}

// Tests
console.log(longer("Another Green World") === "Green World Another");
console.log(longer("Another Green World") === "Green World Another");
console.log(
  longer("Darkness on the edge of Town") === "of on the Town edge Darkness"
);
console.log(
  longer("Have you ever Seen the Rain") === "the you Have Rain Seen ever"
);
console.log(longer("Like a Rolling Stone") === "a Like Stone Rolling");
console.log(longer("This will be our Year") === "be our This Year will");
console.log(longer("hello Hello") === "Hello hello");

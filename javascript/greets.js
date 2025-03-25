/*
======= Greet Me (7 kyu) =======
Write a method that takes one argument as name and 
then greets that name, capitalized and ends with an 
exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

1) Parmeter - A string representing a name.
2) Return - A string with the person's name in title case.
3) Examples - see tests
4) Pseudocode - see comments

*/
var greet = function (name) {
  // convert to lowercase and split into an array of letters
  const person = name.toLowerCase().split("");
  // Capitalize the first letter of the name
  person[0] = person[0].toUpperCase();
  return `Hello ${person.join("")}!`;
};

// Tests
console.log(greet('riley')  === 'Hello Riley!');
console.log(greet('JAMES')  === 'Hello James!');
console.log(greet('JoN')    === 'Hello Jon!');
console.log(greet('timo')   === 'Hello Timo!');
console.log(greet('rIPLEY') === 'Hello Ripley!');

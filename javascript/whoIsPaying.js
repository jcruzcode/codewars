/*
======== Who is going to pay for the wall? (8 kyu) ========
Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go.
Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. 
He begins to solicit his neighbors to petition to get the association to build the wall. 
Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. 
As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. 
If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is

1) Parameter - A string, name.
2) Return - An array containing either 1 or 2 strings.
3) Examples - see tests
4) Pseudocode - see comments
*/

function whoIsPaying(name) {
  // If name is less than three characters long, return an array containing name
  // otherwise, return an array with name and a string containing the first two characters of name
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}

// Tests
console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);

/*
======== Welcome to the City (8 kyu) ========
Create a method that takes as input a name, city, and state to welcome a person. 

Note that name will be an array consisting of one or more values that should be 
joined together with one space between each, and the length of the name array in 
test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'

This example will return the string Hello, John Smith! Welcome to Phoenix, 
Arizona!

1) Parameters -  name: array, city: string, state: string
2) Return - A string welcoming the person to the city.
3) Examples - see tests
4) Pseudocode - see comments

*/
function sayHello(name, city, state) {
  // Use template string literal to format welcome message
  // Join array of names with a space between each name
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// Tests
console.log(sayHello(["Jonathan", "Cruz"], "Anchorage", "Alaska"));
console.log(sayHello(["Jaime", "Gerard"], "Amsterdam", "Holland"));
console.log(sayHello(["Charles", "Olivera"], "Las Vegas", "Nevada"));
console.log(sayHello(["Rufio", "Columbo"], "New York", "New York"));
console.log(sayHello(["Robert", "Kelly"], "Los Angeles", "California"));
/*
======== Hello, Name or World! (8 kyu) ========
Define a method hello that returns 'Hello, Name!' to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = 'john'  => return 'Hello, John!'
* With `name` = 'aliCE' => return 'Hello, Alice!'
* With `name` not given 
  or `name` = ''        => return 'Hello, World!'

1) Parameter - A string, name.
2) Return - If name is not empty, return Hello, Name!,
            where name is capitalized, else return 
            Hello, World!
3) Examples - see tests
4) Pseudocode - see comments

*/
function hello(name) {
  if (name) {
    // Capitalize name
    const letters = name.toLowerCase().split("");
    letters[0] = letters[0].toUpperCase();
    return `Hello, ${letters.join("")}!`;
  } else {
    return `Hello, World!`;
  }
}

// Tests
console.log(hello('johN') === 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
console.log(hello('alice') === 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
console.log(hello() === 'Hello, World!', "returns 'Hello, World!' when name is not given");
console.log(hello('') === 'Hello, World!', "returns 'Hello, World!' when name is an empty string");

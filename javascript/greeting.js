/*
======== Jenny's Secret Message (8 kyu) ========
Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him 
slightly different. 
She added a special case to her function, but she made a mistake.

Can you help her?

1) Parameter - A string that is the user's name
2) Return - A special greeting if the user is Johnny and a generic one
otherwise. Either case a string is returned.
3) Examples - see tests
4) Pseudocode - see comments

*/
function greet(name){
    // Return a special greeting if the user is Johnny, 
    // otherwise return a generic one 
    return name === "Johnny" ? 
      "Hello, my love!" : // for Johnny
      "Hello, " + name + "!"; // for anyone else
}

// Tests
console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");

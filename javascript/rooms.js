/*
======== Grasshopper - Object syntax debug (8 kyu) ========
Object debugging

While making a zork-type game, you create an object of rooms. 

Unfortunately, the game is not working. 

Find all of the errors in the rooms object to get your game working again.

1) Parameters - none
2) Return - No errors
3) Examples - see tests
4) Pseudocode - see comments

*/
// Fix the errors in the object so the game works.
var rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

// Tests
try {
    () => rooms;
    console.log("Success");
} catch (error) {
    console.log("Still need to fix errors.")
}
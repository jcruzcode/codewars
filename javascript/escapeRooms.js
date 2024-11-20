/*
======== Grasshopper - Create the rooms (8 kyu) ========
Escape the room

You are creating an 'Escape the room' game.
The first step is to create a hash table called rooms that contains all of the rooms of the game.
There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

1) Parameters - none
2) Return - A hash table (object) called rooms.
3) Examples - see tests
4) Pseudocode - see comments

*/
// Hash table representing escape rooms
const rooms = {
  bedroom: {
    name: "master bedroom",
    description: "largest bedroom in house",
    completed: false,
  },

  kitchen: {
    name: "kitchen",
    description: "place to make and store food",
    completed: true,
  },

  basement: {
    name: "basement",
    description: "located under house, contains entertainment area and laundry",
    completed: false,
  },
};

// Tests
console.log(Object.keys(rooms).length >= 3, true);
for (const room in rooms) {
    console.log(`Property is an object: ${typeof(rooms[room]) === 'object'}`);
    console.log(`Property has three properties: ${Object.keys(rooms[room]).length >= 3}`);
}
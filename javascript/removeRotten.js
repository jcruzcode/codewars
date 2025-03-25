/*
======= Help the Fruit Guy (7 kyu) =======
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten.

He wants to replace all the rotten pieces of fruit with fresh ones. 

For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"].

Your task is to implement a method that accepts an array of strings containing fruits should returns an 
array of strings where all the rotten fruits are replaced by good ones.

Notes

    If the array is null/nil/None or empty you should return empty array ([]).
    
    The rotten fruit name will be in this camelcase (rottenFruit).
    
    The returned array should be in lowercase.


*/

function removeRotten(bagOfFruits) {
  // Return empty array if array is null or empty
  if (!bagOfFruits) return [];

  const freshFruits = bagOfFruits.slice(); // copy of input

  // Loop over array of freshFruits and remove rotten ones
  for (let i = 0; i < freshFruits.length; i++) {
    if (freshFruits[i].includes("rotten")) {
      freshFruits[i] = freshFruits[i].replace("rotten", "");
    }
  }
  // Return array of clean fruit, ensuring lowercase strings
  return freshFruits.map((fruit) => fruit.toLowerCase());
}

// Tests
console.log(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
console.log(removeRotten([]), [])
console.log(removeRotten(["rottenBanana", "pineapple", "rottenStrawberry", "rottenOrange"]), ["banana", "pineapple", "strawberry", "orange"]);


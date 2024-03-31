/*
======== Is he gonna survive? (8 kyu) ========
A hero is on his way to the castle to complete his mission. 

However, he's been told that the castle is surrounded with a couple of powerful 
dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how 
many bullets he should carry.. 

Assuming he's gonna grab a specific given number of bullets and move forward to 
fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

1) Parameters - Two positive integers bullets and dragons.
2) Return - True if there are at least two bullets for every dragon. False 
            otherwise
3) Examples - see tests
4) Pseudocode - see comments

*/

function hero(bullets, dragons) {
  // If the hero has at least two bullets for each dragon return true, else
  // false.
  return bullets / dragons >= 2;
}

// Tests
console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);

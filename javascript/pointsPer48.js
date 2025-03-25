/*
======== NBA full 48 minutes average (8 kyu) ========
An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. 

Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of 
ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0

Notes:
All inputs will be either be an integer or float.
Follow your dreams!

1) Parameters - two numbers, ppg & mpg.
2) Return - 0 if mpg is 0, otherwise return the total points
            in a 48 min game rounded to the tenths place.
3) Examples - see tests
4) Pseudocode - see comments

*/
function pointsPer48(ppg, mpg) {
  const totalPoints = (ppg / mpg) * 48;
  // Return 0 if mpg is 0, otherwise return totalPoints
  // rounded to the tenths place
  return mpg === 0 ? 0 : +totalPoints.toFixed(1);
}

// Tests
console.log(pointsPer48(12, 20), 28.8)
console.log(pointsPer48(10, 10), 48.0)
console.log(pointsPer48(5, 17), 14.1)
console.log(pointsPer48(0, 0), 0)
console.log(pointsPer48(30.8, 34.7), 42.6)  // Russell Westbrook 1/15/17
console.log(pointsPer48(22.9, 33.8), 32.5)

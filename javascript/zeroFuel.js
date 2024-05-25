/*
======== Will you make it? (8 kyu) ========
You were camping with your friends far away from home, but when it's time to go 
back, you realize that your fuel is running out and the nearest pump is 50 miles
away!

You know that on average, your car runs on about 25 miles per gallon.

There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to 
get to the pump or not.

Function should return true if it is possible and false if not.

1) Parameters - Three numbers representing distanceToPump, mpg, and fuelLeft.
2) Return - True if the distance possible, given mpg and fuelLeft, is greater 
            than or equal to distanceToPump.
3) Examples - see tests
4) Pseudocode - see comments

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // Calculate the distance possible given mpg and fuelLeft
  // Then compare the distance possible to distanceToPump
  return distanceToPump <= mpg * fuelLeft;
};

// Tests
console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
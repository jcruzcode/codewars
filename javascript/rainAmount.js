/*
======== Fix your code before the garden dies!  (8 kyu) ========
You have an award-winning garden and every day the plants need exactly 40mm of water.

You created a great piece of JavaScript to calculate the amount of water your plants will need 
when you have taken into consideration the amount of rain water that is forecast for the day.

Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

1) Parameter - The amount of water as a number in mm.
2) Return - A string stating how much water is needed, if any.
3) Examples - see tests
4) Pseudocode - see comments

*/

function rainAmount(mm) {
  // Check if the rain is less than 40mm
  if (mm < 40) {
    // Calculate how much water to add to reach 40mm of water
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    // If you plant has enough water
    return "Your plant has had more than enough water for today!";
  }
}

// Tests
console.log(
  rainAmount(100),
  "Your plant has had more than enough water for today!"
);
console.log(rainAmount(39), "You need to give your plant 1mm of water");

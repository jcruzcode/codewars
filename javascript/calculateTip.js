/*
======== Tip Calculator (8 kyu) ========
Complete the function, which calculates how much you need to tip based on the 
total amount of the bill and the service.

You need to consider the following ratings:

    Terrible: tip 0%
    Poor: tip 5%
    Good: tip 10%
    Great: tip 15%
    Excellent: tip 20%

The rating is case insensitive (so 'great' = 'GREAT'). If an unrecognised rating
 is received, then you need to return:

    'Rating not recognised' in Javascript, Python and Ruby...
    ...or null in Java
    ...or -1 in C#

Because you're a nice person, you always round up the tip, regardless of the 
service.

1) Parameters - A number, amount, and a string, rating.
2) Return - A number, representing the tip, rounded up to the nearest
            whole number, based on the amount and rating.
3) Examples - see tests
4) Pseudocode - see comments

*/

function calculateTip(amount, rating) {
  // Make rating a lowercase string
  const lowercase = rating.toLowerCase();
  let tip;

  // Calculate tip percentage based on the rating given
  // Round tip up to next greatest whole number
  if (lowercase === "terrible") {
    tip = 0;
  } else if (lowercase === "poor") {
    tip = Math.ceil(0.05 * amount);
  } else if (lowercase === "good") {
    tip = Math.ceil(0.1 * amount);
  } else if (lowercase === "great") {
    tip = Math.ceil(0.15 * amount);
  } else if (lowercase === "excellent") {
    tip = Math.ceil(0.2 * amount);
  } else {
    return "Rating not recognised";
  }

  return tip;
}

// Tests
console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);

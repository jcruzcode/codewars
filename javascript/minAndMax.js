/*
====== Maximum and Minimum (6 kyu) ======
Write two functions max and min which returns the maximum and minimum value of 
the argument passed into them respectively.

Example

    max(1,2,3,4) //returns 4
    max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
    max(1,2,[3,4]) //returns 4
    max(1,2,[3,[4]]) //returns 4
    max(1,2,[3,['4r']]) //returns NaN
    max([[],[-4]]) // returns -4
    max() or max([]) //returns 0

And so goes for min

Further Instructions

    functions will take any number of arguments
    Arrays of numbers can be to any depth
    You can't use Math.max, Math.min, and require
    If one of the arguments can not be evaluated to a number, return NaN

1) Parameters - Any number of arguments which may or may not be numbers and
                arrays of numbers.
2) Return - Min or max value.
            NaN if one of the arguments cannot be evaluated to a number.
            0 if no arguments or empty array
3) Examples - see tests
4) Pseudocode - see comments

*/

function max(...args) {
  // Flatten array to remove nesting
  const arguments = args.flat(Infinity);

  // Check if no arguments or empty array
  if (arguments.length === 0) return 0;

  let max = arguments[0];

  // Iterate over arguments and find maximum number, if an argument can't be
  // converted to a number than return NaN
  for (let arg of arguments) {
    if (Number.isNaN(+arg)) return NaN;

    if (arg > max) max = arg;
  }
  // Return max value as a number
  return +max;
}

function min(...args) {
  // Flatten array to remove nesting
  const arguments = args.flat(Infinity);

  // Check if no arguments or empty array
  if (arguments.length === 0) return 0;

  let min = arguments[0];

  // Iterate over arguments and find minimum number, if an argument can't be
  // converted to a number than return NaN
  for (let arg of arguments) {
    if (Number.isNaN(+arg)) return NaN;

    if (arg < min) min = arg;
  }
  // Return min value as a number
  return +min;
}

// Tests
console.log("Max tests...");
console.log(max(1, 2, 3, 4), 4);
console.log(max(1, 2, [3, 4]), 4);
console.log(max(1, 2, [3, [4]]), 4);
console.log(max(1, 2, [3, ["4r"]]), NaN);
console.log(max(), 0);
console.log(max([]), 0);
console.log("Min tests...");
console.log(min(1, 2, 3, 4), 1);
console.log(min([1, 2], 3, 4), 1);
console.log(min(1, 2, [3, [4, 0]]), 0);
console.log(min(1, 2, [3, ["4r"]]), NaN);

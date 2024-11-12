/*
======== Is your period late? (8 kyu) ========
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength.

Otherwise, return false.

1) Parameters - Two Date objects, last and today, and a positive integer cycleLength.
2) Return - true if the number of days passed from last to today is greater than cycleLength,
            otherwise false.
3) Examples - see tests
4) Pseudocode - see comments
*/

function periodIsLate(last, today, cycleLength) {
  // Check if number of days passed from last to today is greater than cycleLength
  return (today - last) / 86400000 > cycleLength;
}

// Tests
console.log(
  periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35) === false
);
console.log(
  periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28) === true
);

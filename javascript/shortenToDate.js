/*
======== Remove the time (8 kyu) ========
Task Description

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.
Input

Input will always be a string, e.g., 'Friday May 2, 7pm'. 
Output

Output will be the shortened string, e.g., 'Friday May 2'.

1) Parameters - A string, longDate, representing a date.
2) Return - A shortened string of the date.
3) Examples - see tests
4) Pseudocode - see comments

*/
function shortenToDate(longDate) {
  // Split the string into an array by ','
  // and return the first element
  return longDate.split(",")[0];
}

// Tests
console.log(shortenToDate("Friday May 2, 9am")        === "Friday May 2");
console.log(shortenToDate("Tuesday January 29, 10pm") === "Tuesday January 29");
console.log(shortenToDate("Monday December 25, 10pm") === "Monday December 25");
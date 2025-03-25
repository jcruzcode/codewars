/*
======== Return the day (8 kyu) ========
Complete the function which returns the weekday according to the input number:

    1 returns 'Sunday'
    2 returns 'Monday'
    3 returns 'Tuesday'
    4 returns 'Wednesday'
    5 returns 'Thursday'
    6 returns 'Friday'
    7 returns 'Saturday'
    Otherwise returns 'Wrong, please enter a number between 1 and 7'

1) Parameters - An integer
2) Return - A day of the week corresponding to integers 1-7, otherwise
            return an error message
3) Examples - see tests
4) Pseudocode - see comments

*/
function whatday(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return num >= 1 && num <= 7
    ? days[num - 1] // Give day of week corresponding to num
    : "Wrong, please enter a number between 1 and 7"; // error message
}

// Tests
console.log(whatday(1) === "Sunday");
console.log(whatday(2) === "Monday");
console.log(whatday(3) === "Tuesday");
console.log(whatday(8) === "Wrong, please enter a number between 1 and 7");
console.log(whatday(20) === "Wrong, please enter a number between 1 and 7");

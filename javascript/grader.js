/*
======== Grader (8 kyu) ========
Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	"F"
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"

Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"

1) Parameters - A number, score.
2) Return - A string representing the letter grade
            associated with score.
3) Examples - see tests
4) Pseudocode - see comments

*/
function grader(score) {
  // Return the letter grade A-F based on given score
  return score > 1
    ? "F"
    : score >= 0.9
    ? "A"
    : score >= 0.8
    ? "B"
    : score >= 0.7
    ? "C"
    : score >= 0.6
    ? "D"
    : "F";
}

// Tests
console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");
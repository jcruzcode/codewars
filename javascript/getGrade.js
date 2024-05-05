/*
======== Grasshopper - Grade book (8 kyu) ========
Grade book

Complete the function so that it finds the average of the three scores passed to 
it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative
values or values greater than 100.

1) Parameters - Three numbers representing scores for different tests.
2) Return - A string representing the letter grade of the average score.
3) Examples - see tests
4) Pseudocode - see comments

*/

function getGrade(s1, s2, s3) {
  // Calculate the average score of the three tests
  const avgScore = Array.from(arguments).reduce((acc, val) => acc + val, 0) / Array.from(arguments).length;
  // Determine letter grade from average score
  return avgScore >= 90 ? "A" : avgScore >= 80 ? "B" : avgScore >= 70 ? "C" : avgScore >= 60 ? "D" : "F";
}

// Tests
console.log(getGrade(95, 90, 93), "A");
console.log(getGrade(100, 85, 96), "A");
console.log(getGrade(92, 93, 94), "A");
console.log(getGrade(70, 70, 100), "B");
console.log(getGrade(82, 85, 87), "B");
console.log(getGrade(84, 79, 85), "B");
console.log(getGrade(89, 89, 90), "B");
console.log(getGrade(70, 70, 70), "C");
console.log(getGrade(75, 70, 79), "C");
console.log(getGrade(60, 82, 76), "C");
console.log(getGrade(65, 70, 59), "D");
console.log(getGrade(66, 62, 68), "D");
console.log(getGrade(58, 62, 70), "D");
console.log(getGrade(44, 55, 52), "F");
console.log(getGrade(48, 55, 52), "F");
console.log(getGrade(58, 59, 60), "F");

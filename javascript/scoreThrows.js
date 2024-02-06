/*

====== Throwing Darts (6 kyu) =======
You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

    0 points - radius above 10
    5 points - radius between 5 and 10 inclusive
    10 points - radius less than 5

If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.
Examples:

scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140

1) Parameters - An array of positive numbers
2) Return - A number that represents the total score for a Dart Board game
3) Examples - see test cases
4) Pseudocode - see comments

*/

function scoreThrows(radii){
    let score = 0, count = 0;
    
    // Check for empty array
    if (radii.length === 0) return radii.length;

    // Loop over radii and calculate score based on scoring specifications
    // Also keep track of the number of elements that are less than 5
    for (let radius of radii) {
        if (radius < 5) {
            score += 10;
            count++;
        } else if (radius <= 10) {
            score  += 5;
        } 
    }

    // Check if all radii are less than 5 for bonus
    if (radii.length === count) score += 100;

    // Return total score
    return score;
}

// Test Cases
console.log(scoreThrows([1, 5, 11]), 15);
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]),  0);
console.log(scoreThrows([1, 2, 3, 4]), 140);
console.log(scoreThrows([]), 0, 'Empty list');
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);
console.log(scoreThrows([0, 5, 10, 10.5, 4.5]),  30);
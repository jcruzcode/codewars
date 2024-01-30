/*
====== Manhattan Distance (6 kyu) ======
The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?
Manhattan Distance

Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

Complete the function that accepts two points and returns the Manhattan Distance between the two points.

The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.
Examples

* Input [1, 1], [1, 1] => Output 0
* Input [5, 4], [3, 2] => Output 4
* Input [1, 1], [0, 3] => Output 3

1) Parameters - Two arrays, each with two numbers. Each array corresponds to an x and y coordinate - i.e. [x, y]
2) Return - A non-negative integer - the Manhattan distance
3) Examples - See test cases
4) Pseudocode - See comments

*/

function manhattanDistance(pointA, pointB){
    // To find the Manhattan distance:
    // 1) Find the difference between x coordinates
    // 2) Take the absolute value of the difference
    // 3) Repeat steps 1 & 2 for the y coordinates
    // 4) Sum the absolute differences found for x & y coordinates
    return Math.abs(pointA[0]-pointB[0]) + Math.abs(pointA[1]-pointB[1]); 
}

console.log(manhattanDistance([1,1],[1,1]), 0);
console.log(manhattanDistance([5,4],[3,2]), 4);
console.log(manhattanDistance([1,1],[0,3]), 3);
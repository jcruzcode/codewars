"use strict";
/*
======= Cartesian Neighbors (7 kyu) =======
A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates,

which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.

The сoordinates of a point in the grid are written as (x,y). Each point in a coordinate system has eight neighboring points.

Provided that the grid step = 1.

It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points.

Points inside your returned list need not be sorted (any order is valid).

For Example:

* Given x = 2 and y = 2, the function should return [(1,1),(1,2),(1,3),(2,1),(2,3),(3,1),(3,2),(3,3)];
* Given x = 5 and y = 7, the function should return [(6,7),(6,6),(6,8),(4,7),(4,6),(4,8),(5,6),(5,8)]

Note that the required data structure to contain the coordinates might not be the same between translations, so check the sample test cases provided.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianNeighbor = cartesianNeighbor;
function cartesianNeighbor(x, y) {
    const neighbors = [];
    // Find the eight neighboring cartesian coordinates of (x,y)
    for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
            // Ignore (x,y)
            if (!(j === y && i === x))
                neighbors.push([i, j]);
        }
    }
    return neighbors;
}
// Tests
console.log(cartesianNeighbor(2, 2), [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
]);
console.log(cartesianNeighbor(5, 7), [
    [4, 6],
    [4, 7],
    [4, 8],
    [5, 6],
    [5, 8],
    [6, 6],
    [6, 7],
    [6, 8],
]);

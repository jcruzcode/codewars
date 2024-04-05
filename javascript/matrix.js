/*
======= Change two-dimensional array (7 kyu) =======
Function receive a two-dimensional square array of random integers. 
On the main diagonal, all the negative integers must be changed to 0, while the 
others must be changed to 1 (Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate
the input)

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]

Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]

1) Parameter - a two-dimensional square array of random integers
2) Return - The 2-D array but on the main diagonal, all the negative integers 
            must be changed to 0, while the others must be changed to 1
3) Examples - see tests
4) Pseudocode - see comments

*/
function matrix(array) {
  // copy 2D array
  const matrix = array.slice();

  // The position of the number on the main diagonal corresponds to the row
  // number, like 0th element of row 0 or 1st element of row 1.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Change element with index matching row number
      if (i === j) {
        // Change negative numbers to 0 and all others to 1
        matrix[i][j] < 0 ? (matrix[i][j] = 0) : (matrix[i][j] = 1);
      }
    }
  }

  return matrix;
}

// Tests
console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 4, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ]),
  [
    [0, 4, -5, -9, 3],
    [6, 0, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 0, -9],
    [-3, 2, 1, -5, 1],
  ]
);
console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, 8, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 15, -9],
    [-3, 2, 1, -5, -6],
  ]),
  [
    [0, 4, -5, -9, 3],
    [6, 1, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 1, -9],
    [-3, 2, 1, -5, 0],
  ]
);
console.log(
  matrix([
    [-1, 4, -5, -9, 3, 8],
    [6, 8, -7, 4, -5, -1],
    [3, 5, 1, -9, -1, 6],
    [1, 5, -7, 15, -9, 3],
    [-3, 2, 1, -5, -6, 0],
    [8, 2, 0, -2, 4, -5],
  ]),
  [
    [0, 4, -5, -9, 3, 8],
    [6, 1, -7, 4, -5, -1],
    [3, 5, 1, -9, -1, 6],
    [1, 5, -7, 1, -9, 3],
    [-3, 2, 1, -5, 0, 0],
    [8, 2, 0, -2, 4, 0],
  ]
);
console.log(
  matrix([
    [1, 1, -5, 5],
    [2, -4, 11, 2],
    [3, 1, -1, 4],
    [2, -6, 8, 10],
  ]),
  [
    [1, 1, -5, 5],
    [2, 0, 11, 2],
    [3, 1, 0, 4],
    [2, -6, 8, 1],
  ]
);

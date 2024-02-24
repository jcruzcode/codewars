/*
======= Breaking Chocolate Problem (7 kyu) =======
Your task is to split the chocolate bar of given dimension n x m into small 
squares. 

Each square is of size 1x1 and unbreakable. 

Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to 
single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 
(as in no breaks are needed if we do not have any chocolate to split). 

Input will always be a non-negative integer.

1) Parameters - Two non-negative integers, n and m. 
2) Returns - The minimum number of breaks needed to split into 1x1 squares.
3) Examples - see tests
4) Pseudocode - see comments

*/

function breakChocolate(n, m) {
  // If any dimension is zero, the number of breaks is also zero.
  // Otherwise, the number of breaks needed is one
  // less than the product of the dimensions.
  return n === 0 || m === 0 ? 0 : n * m - 1;
}

// Tests
console.log(breakChocolate(1,1), 0);
console.log(breakChocolate(2,1), 1);
console.log(breakChocolate(3,2), 5);
console.log(breakChocolate(5,5), 24);


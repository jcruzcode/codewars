/*
======== Head, Tail, Init and Last (7 kyu) =======
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5

Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x

Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]

Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. 

There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

1) Parameter - All functions will take an array.
2) Return - head: first element of array
            tail: an array, including all but the first element
            init: an array, including all but the last element
            last: the last element of array
3) Examples - see tests
4) Pseudocode - see comments

*/

// Return the first element of arr
function head(arr) {
  return arr[0];
}

// Return an array containing all elements from arr except the first 
function tail(arr) {
  return arr.slice(1);
}

/// Return an array containing all elements from arr except the last
function init(arr) {
  return arr.slice(0, arr.length - 1);
}

// Return the last element from arr
function last(arr) {
  return arr[arr.length - 1];
}

// Tests
console.log(head([5,1]), 5);
console.log(tail([1]), []);
console.log(init([1,5,7,9]), [1,5,7]);
console.log(last([7,2]), 2);

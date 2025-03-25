/*
======= Clean up after your dog (7 kyu) =======
You have stumbled across the divine pleasure that is owning a dog and a garden.

Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). 

If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched.

If he is there you need to return 'Dog!!'.

For example:

bags = 2
cap = 2
x (or garden) =
[[ _ , _ , _ , _ , _ , _ ],
 [ _ , _ , _ , _ , @ , _ ],
 [ @ , _ , _ , _ , _ , _ ]]

returns 'Clean'

1) Parameters - A 2D array representing your garden, x, the number of bags, bags, and
                the capacity of each bag ,cap, as a number.
2) Return - A string indicating whether your dog is present, the yard is clean, or
            there is still poop in the yard.
3) Examples - see tests
4) Pseudocode - see comments

*/

function crap(x, bags, cap) {
  return x.flat(2).includes("D") // Check if your dog is in the garden
    ? "Dog!!"
    : x.flat(2).filter((char) => char === "@").length <= bags * cap // Check if you have enough bags to clean up
    ? "Clean"
    : "Cr@p";
}

// Tests
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) === "Clean");
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1) === "Cr@p");
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2) === "Dog!!");

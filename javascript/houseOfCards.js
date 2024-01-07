/*
House of cards (6 kyu)

Write a program which will count the minimal number of cards a house of cards 
needs according to the number of floors you want to have. 

If you want your house of cards to have a first floor, it needs a ground floor 
and then a first floor above that.

1) Parameters
  floors - The input must be an integer greater than 0, for other 
           input raise an error.

  Ensure floors is an integer greater than 0.
  Otherwise, error thrown.
  
2) Returns
  Return either
    Number of cards needed to make a house of cards with n floors
     OR
    Error
3) Examples
    See tests below function
4) Pseudocode
    See function
 
 */
function houseOfCards(floors) {
  // Check if floors is an integers greater than 0, throw error if not
  if (!Number.isInteger(floors) || floors <= 0)
    throw new Error("Invalid Input.");

  let totalCards = 0;
  // compute cards for groundFloor, which is  floors + 1
  const groundFloor = 2 * (floors + 1);
  totalCards += groundFloor;
  // Add up consecutive decreasing integers from floors to 1
  // Add up decreasing multiples of 2 from floors + 1 to  1
  for (let i = floors; i > 0; i--) {
    totalCards += 2 * i + i;
  }
  // Return number of cards needed to build house of cards
  return totalCards;
}

// Return number of cards
console.log(houseOfCards(1), 7);
console.log(houseOfCards(4), 40);

// Throw error
//console.log(houseOfCards(0));
//console.log(houseOfCards(-1));

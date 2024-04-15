/*
======== Price of Mangoes (8 kyu) ========


There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
For a given quantity and price (per mango), calculate the total cost of the 
mangoes.

Examples

mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

1) Parameters - Positive integers quantity and price.
2) Returns - Total cost of mangoes.
3) Examples - see tests
4) Pseudocode - see comments

*/

function mango(quantity, price) {
  if (quantity < 3) { // Case 1
    // Total cost is the product of quantity and price
    return quantity * price;
  } else if (quantity === 3) { // Case 2
    // Total cost is twice the regular price
    return 2 * price;
  } else if (quantity > 3 && quantity % 3 === 0) { // Case 3
    // Total cost is the cost of the discounted mangoes
    return (quantity / 3) * 2 * price;
  } else {
    // Total cost is the cost of both the discounted mangoes and remaining
    // mangoes at regular price
    return Math.floor(quantity / 3) * 2 * price + (quantity % 3) * price;
  }
}

// Tests
console.log(mango(2, 3) === 6);
console.log(mango(3, 3) === 6);
console.log(mango(5, 3) === 12);
console.log(mango(9, 5) === 30);

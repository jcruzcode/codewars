/*

======= Going to the cinema (7 kyu) =======
My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

Example:

If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next 
dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid 
for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.

More examples:

movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)

1) Parameters - The price of the card (card), the normal price of a ticket (ticket),
                and the percentage of the previous ticket price (perc).
2) Return - The number of times John must go to the cinema, as a number, so that 
            system B rounded up to the next dollar is cheaper than system A.
3) Examples - see tests
4) Pseudocode - see comments

*/

function movie(card, ticket, perc) {
  let discount = ticket * perc, // Calculate inital ticket discount
    count = 0, // Initialize counter
    systemB = card; // Set System B total equal to price of card

  do {
    systemB += discount; // Add discount to System B total
    count++; // Increment cinema count by 1
    discount *= perc; // Calculate new ticket discount
    // Check that the ceiling of System B total is still greater 
    // than or equal to System A before repeating
  } while (Math.ceil(systemB) >= ticket * count); 

  return count;
}

// Tests
console.log(movie(500, 15, 0.9), 43);
console.log(movie(100, 10, 0.95), 24);

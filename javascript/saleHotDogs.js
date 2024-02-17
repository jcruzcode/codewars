/*
======== Training JS #7: if..else and ternary operator (8 kyu) ========
Task:

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 
parameter:n, n is the number of hotdogs a customer will buy, different numbers 
have different prices (refer to the following table), return how much money will
the customer spend to buy that number of hotdogs.

number of hotdogs 	price per unit (cents)
n < 5 	            100
n >= 5 and n < 10 	95
n >= 10 	        90

1) Parameter - A positive integer, n, representing the number of hotdogs to be 
               bought.
2) Returns  - The cost of buying n hotogs
3) Examples - see tests
4) Pseudocode - see comments

*/
function saleHotdogs(n){
    // Use ternary operator to implement branching logic for hotdog price
    // based on quatity bought:
    // 1) For less than 5, 100 cents each
    // 2) 5 <= n < 10, 95 cents each
    // 3) n >= 10, 90 cents each
    // In any case, return the product of the unit cost and quantity  
    return n < 5 ? 100 * n : n  < 10 ? 95 * n : 90 * n;  
}

// Tests
console.log(saleHotdogs(  1),  100);
console.log(saleHotdogs(  4),  400);
console.log(saleHotdogs(  5),  475);
console.log(saleHotdogs(  9),  855);
console.log(saleHotdogs( 10),  900);
console.log(saleHotdogs(100), 9000);
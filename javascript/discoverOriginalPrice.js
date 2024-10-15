/*
======= Discover The Original Price (7 kyu) =======
We need to write some code to return the original price of a product, 
the return type must be of type decimal and the number must be rounded to two decimal places.

We will be given the sale price (discounted price), and the sale percentage, our job is to 
figure out the original price.

For example:

Given an item at $75 sale price after applying a 25% discount, the function should return the 
original price of that item before applying the sale percentage, which is ($100.00) of course, 
rounded to two decimal places.

DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is 
the sale percentage and 100 is the original price

1) Parameters - Two numbers, discountedPrice and salePercentage.
2) Return - The original price as a floating point number with two decimal places.
3) Examples - see tests
4) Pseudocode - see comments
*/

function discoverOriginalPrice(discountedPrice, salePercentage) {
  // Calculate the original price to two decimal places
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

// Tests
console.log(discoverOriginalPrice(75,25),100);
console.log(discoverOriginalPrice(25,75),100);
console.log(discoverOriginalPrice(75.75,25),101);

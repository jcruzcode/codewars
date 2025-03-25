/*
======== Fuel Calculator: Total Cost (8 kyu) ========
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount 
of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. 

But total discount per litre cannot be more than 25 cents. 
Return the total cost rounded to 2 decimal places. 

Also you can guess that there will not be negative or non-numeric inputs.

1) Parameters - Two numbers: litres and pricePerLitre.
2) Return - The total cost of fuel with the discount included,
            as a number to two decimal places.
3) Examples - see tests
4) Pseudocode - see comments

*/
function fuelPrice(litres, pricePerLitre) {
  let costStr;
  // Calculate the cost of fuel minus the discount to two decimal places
  litres < 4
    ? (costStr = (litres * (pricePerLitre - 0.05)).toFixed(2))
    : litres < 6
    ? (costStr = (litres * (pricePerLitre - 0.1)).toFixed(2))
    : litres < 8
    ? (costStr = (litres * (pricePerLitre - 0.15)).toFixed(2))
    : litres < 10
    ? (costStr = (litres * (pricePerLitre - 0.2)).toFixed(2))
    : litres >= 10
    ? (costStr = (litres * (pricePerLitre - 0.25)).toFixed(2))
    : (costStr = (litres * pricePerLitre).toFixed(2));
  return Number.parseFloat(costStr); // Convert from string to float
}

// Tests
console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);

/*
======== Calculate Price Excluding VAT (8 kyu) ========
Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1

1) Parameter - A number representing the final price of a product with VAT.
2) Return - The original product price without VAT as a number to two decimal places.
            Return -1 if null is given.
3) Examples - see tests
4) Pseudocode - see comments

*/
function excludingVatPrice(price) {
  return price === null ? -1 : +(price / 1.15).toFixed(2);
}

// Tests
console.log(excludingVatPrice(230), 200.00);
console.log(excludingVatPrice(123), 106.96);

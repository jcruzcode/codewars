/*
======== USD => CNY (8 kyu) ========
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) .

The input is the amount of USD as an integer, and the output should be a 
string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)

15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. 

All numbers should be represented as a string with 2 decimal places. 

(e.g. '21.00' NOT '21.0' or '21')

1) Parameter - A number representing USD dollar value
2) Return - A string giving the converted value in CNY to 
            two decimal places.
3) Examples - see tests
4) Pseudocode - see comments

*/

function usdcny(usd) {
  // Return value in CNY to two decimal places
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

// Tests
console.log(usdcny(15) === "101.25 Chinese Yuan");
console.log(usdcny(465) === "3138.75 Chinese Yuan");
console.log(usdcny(1) === `6.75 Chinese Yuan`);
console.log(usdcny(2.5) === `16.88 Chinese Yuan`);
console.log(usdcny(2) === `13.50 Chinese Yuan`);

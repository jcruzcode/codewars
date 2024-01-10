/*
------Number Format (6 kyu)------

Format any integer provided into a string 
with "," (commas) in the correct places.

********Description********
1) Parameters - any integer, positive, negative, and zero.
2) Returns - A string with commas in the correct places*
    Correct places meaning if a number has more than 4 digits
    places commas, starting from the end (lowest digit), after every
    3rd digit.
3) Examples - see test cases
4) Psuedocode - see comments

*/
function numberFormat(number) {
  const commas = [];
  let negative, sequence, multipler = 0;
  // Convert integer to a string
  // Split string by char into an array
  let digits = number.toString().split("");

  // Extract the minus sign if number if negative
  if (number < 0) negative = digits.shift();
  // Reverse the array
  digits = digits.reverse();
  
  // Loop over digits and unshift each digit to the array
  // 'commas' adding a ',' after every third character
  for ( let i = 0; i < digits.length; i++ ) {
    sequence = 3 * multipler + 2;
    if ( i === sequence && i !== digits.length - 1) {
        multipler++;
        commas.unshift(`,${digits[i]}`);
    }else {
        commas.unshift(digits[i]);
    }
  }
  // Unshift minus sign to commas if number < 0
  if (negative) commas.unshift(negative);

  // A string with commas in the correct places
  return commas.join('');
}

console.log(numberFormat(100000) === "100,000");
console.log(numberFormat(5678545) === "5,678,545");
console.log(numberFormat(-420902) === "-420,902");

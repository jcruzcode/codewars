/*
======== Multiply the number (8 kyu) ========
Jack really likes his number five: the trick here is that you have to multiply
each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)


1) Parameters - An integer, number
2) Return - A number where each input is multiplied by 5 raised to the 
            power of the number of digits in the input.
3) Examples - see tests
4) Pseudocode - see comments

*/

function multiply(number){
    // To find the number of digits in the input, take the absolute value, 
    // convert to a string and find the length
    // Multiply each number by 5 raised to the number of digits of the input
    return number * 5 ** Math.abs(number).toString().length;
}

// Tests
console.log(multiply(10)  ===    250);
console.log(multiply(5)   ===      25);
console.log(multiply(200) === 25000);
console.log(multiply(0)   ===       0);
console.log(multiply(-2)  ===    -10);
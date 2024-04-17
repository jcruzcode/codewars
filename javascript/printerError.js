/*
======= Printer Error (7 kyu) =======

In a factory a printer prints labels for boxes. 

For one kind of boxes the printer has to use colors which, for the sake of 
simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. 

For example a 'good' control string would be aaabbbbhaijjjm meaning that the 
printer used three times color a, four times color b, one time color h then one 
time color a...

Sometimes there are problems: lack of colors, technical malfunction and a 'bad' 
control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a 
to m.

You have to write a function printer_error which given a string will return the 
error rate of the printer as a string representing a rational whose numerator is
the number of errors and the denominator the length of the control string. 

Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from 
a to z.

1) Parameters - A string containing letters.
2) Return - A rational number as a string. The numerator is the number of errors
            and the denominator the length of the control string.
3) Examples - see tests
4) Pseudocode - see comments

*/

function printerError(s) {
  let errorCount = 0;
  // Loop over the string s and count how many letter are not in the range
  // a to m, inclusive.
  for (let letter of s) {
    if (!(letter.charCodeAt() >= 97 && letter.charCodeAt() <= 109))
      errorCount++;
  }

  return `${errorCount}/${s.length}`;
}

// Tests
console.log(printerError("aaabbbbhaijjjm"), "0/14");
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"), "8/22");
console.log(printerError("aaabbbbcccchaijjjm"), "0/18");
console.log(printerError("aaaxqqqqyyhwawiwjjjwwm"), "12/22");
console.log(printerError("aaaxbbbbcccyyhwawiwjjjwwm"), "8/25");

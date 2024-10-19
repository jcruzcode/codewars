/*
======= Char Code Calculation (7 kyu) =======
Given a string, turn each character into its ASCII character code and 
join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call
this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

1) Parameter - A string, x.
2) Return - The difference between the sum of the digits in total1 and total2 as
            described above.
3) Examples - see tests
4) Pseudocode - see comments

*/
function calc(x) {
  // Convert characters of x into ASCII codes and join to form a number
  const num1 = x
    .split("")
    .map((char) => char.charCodeAt())
    .join("");
  // Replace the occurences of 7 with 1 in num1
  const num2 = num1.replaceAll("7", "1");
  // Calculate the sum of digits in num1 & num2
  const total1 = num1
    .split("")
    .map((item) => +item)
    .reduce((acc, val) => acc + val, 0);
  const total2 = num2
    .split("")
    .map((num) => +num)
    .reduce((total, value) => total + value, 0);

  // Return the difference
  return total1 - total2;
}

// Tests
console.log(calc("abcdef"), 6);
console.log(calc("ifkhchlhfd"), 6);
console.log(calc("aaaaaddddr"), 30);
console.log(calc("jfmgklf8hglbe"), 6);
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 96);
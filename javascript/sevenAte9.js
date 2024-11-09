/*
======= SevenAte9 (7 kyu) =======
Write a function that removes every lone 9 that is inbetween 7s.

'79712312' --> '7712312'
'79797'    --> '777'

1) Parameters - A string of digits.
2) Return - A string with every lone 9 between 7s removed.
3) Examples - see tests
4) Pseudocode - see comments

*/
function sevenAte9(str) {
  const digits = str.split("");
  // Remove every lone 9 that is inbetween 7s
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "9" && digits[i - 1] === "7" && digits[i + 1] === "7")
      digits[i] = "";
  }

  return digits.join("");
}

// Tests
console.log(sevenAte9('797') === '77');
console.log(sevenAte9('7979797') === '7777');
console.log(sevenAte9('165561786121789797') ===  '16556178612178977');
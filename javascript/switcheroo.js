/*
======= Switcheroo (7 kyu) =======
Given a string made up of letters a, b, and/or c, switch the position of letters
a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

1) Parameters  - A string of letters
2) Return - A modified string where the original 'a' letters are changed to
            'b' and the original 'b' letters are changed to 'a'. Other letters,
            are left unmodified.
3) Examples - see tests
4) Pseudocode - see comments

*/

function switcheroo(x) {
  return x
    .split("") // split x into an array of letters
    // Change each 'a' to 'b' and 'b' to 'a', otherwise leave letter unchanged
    .map((letter) => (letter === "a" ? "b" : letter === "b" ? "a" : letter))
    .join(""); // combined array into a string of letters
    
}

// Tests
console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc');  

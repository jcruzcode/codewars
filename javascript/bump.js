/*
======= Bumps in the Road (7 kyu) =======
Your car is old, it breaks easily. The shock absorbers are gone and you think it 
can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either 
flat road (_) or bumps (n). 

If you are able to reach home safely by encountering 15 bumps or less,
return Woohoo!, otherwise return Car Dead

1) Parameter -  A string with underscores "_" representing flat roads or bumps
                represented with "n"
2) Return - "Woohoo!" if only 15 or less bumps are encountered, otherwise
             return "Car Dead"
3) Example - see tests
4) Pseudocode - see comments 

*/

function bump(x) {
  // Count the number of bumps ("n" characters) in the given string
  return x.split("").filter((char) => char === "n").length <= 15
    ? "Woohoo!"
    : "Car Dead"; // Number of bumps greater than 15
}

// Tests
console.log(bump("_____nnn___nnn"), "Woohoo!");
console.log(bump("_____nnn___nnn"), "Woohoo!");
console.log(bump("_____nnn___nnnnnnnnnnnnn"), "Car Dead");
console.log(bump("_____nnn___nnn______nnnnnnnnnnnnnn"), "Car Dead");
console.log(
  bump("_____nnn___nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"),
  "Car Dead"
);

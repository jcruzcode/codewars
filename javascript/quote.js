/*
======== For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre (8 kyu) ========
This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. 

Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner 
will make his legendary statement. 

It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

    "I am not impressed by your performance."

If the winner is Conor McGregor he will most undoubtedly say:

    "I'd like to take this chance to apologize.. To absolutely NOBODY!"

Good Luck!
Note

The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE".

Your solution should treat both as the same thing (case-insensitive).

1) Parameters - A name given as a string.
2) Return - A quote by Conor McGregor or GSP depending which name is given.
3) Examples - see tests
4) Pseudocode - see pseudocode

*/
const quote = function (fighter) {
  // Make fighter name lowercase and check if it is GSP or Conor McGregor
  // and return the appropriate quote
  return fighter.toLowerCase() === "george saint pierre"
    ? "I am not impressed by your performance."
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

// Tests
console.log(quote('conor mcgregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
console.log(quote('george saint pierre'), "I am not impressed by your performance.")
console.log(quote('George Saint Pierre'), "I am not impressed by your performance.")
console.log(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")

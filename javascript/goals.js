/*
======== Grasshopper - Messi goals function (8 kyu) ========
Messi goals function

Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

1) Parameters - Three integers representing the number of goals Messi
                scored in each league:
                laLigaGoals, copaDelReyGoals, and championsLeagueGoals.
2) Return - The total number of goals Messi scored.
3) Examples - see tests
4) Pseudocode - see comments

*/
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Tests
console.log(goals(0, 0, 0), 0);
console.log(goals(43, 10, 5), 58);

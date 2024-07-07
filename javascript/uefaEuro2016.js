/*
======== UEFA EURO 2016 (8 kyu) ========
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // 'At match Germany - Ukraine, Germany won!'
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // 'At match Belgium - Italy, Italy won!'
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // 'At match Portugal - Iceland, teams played draw.'

1) Parameters - An array of two strings, called teams, to hold country names and
                An array of two non-negative integers, called scores, to hold team scores.
2) Return - A string stating which team won or a draw.
3) Examples - see tests
4) Pseudocode - see comments

*/

function uefaEuro2016(teams, scores) {
  // Return a string stating which team won or draw game.
  return `At match ${teams[0]} - ${teams[1]}, ${
    scores[0] > scores[1]
      ? teams[0] + " won!"
      : scores[1] > scores[0]
      ? teams[1] + " won!"
      : "teams played draw."
  }`;
}

// Tests
console.log(
  uefaEuro2016(["Germany", "Ukraine"], [2, 0]) ===
  "At match Germany - Ukraine, Germany won!"
);
console.log(
  uefaEuro2016(["Belgium", "Italy"], [0, 2]) ===
  "At match Belgium - Italy, Italy won!"
);
console.log(
  uefaEuro2016(["Portugal", "Iceland"], [1, 1]) === 
  "At match Portugal - Iceland, teams played draw."
);

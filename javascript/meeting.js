/*
====== Meeting (6 kyu) ======
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

    makes this string uppercase
    gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first 
name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people 
have the same first name too.

1) Parameters - A string of first and last names with ':' and ';' characters.
2) Return - A string with names in uppercase, sorted in alphabetical order by
            last name. Names separated with '()' and first and last names
            separated by ','.
3) Examples - 
4) Pseudocode - 

*/
function meeting(s) {
  // Separate string in to an array of elements of first and last names
  const names = s.split(";");

  for (let i = 0; i < names.length; i++) {
    // Make each element uppercase
    // Split each element into an array with first name and last name
    // Reverse the order of the array so that its last name, first name
    // Add parantheses to each end
    names[i] = names[i].toUpperCase().split(":").reverse();
  }

  // Sort names alphabetically by last name
  // If same last name, sort by first name
  names.sort((name1, name2) => {
    if (name1[0] < name2[0]) {
      return -1;
    } else if (name1[0] > name2[0]) {
      return 1;
    } else {
      if (name1[1] < name2[1]) {
        return -1;
      } else if (name1[1] > name2[1]) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  for (let j = 0; j < names.length; j++) {
    // Combined each first and last name with a comma and space
    names[j] = names[j].join(", ");
    // Add parantheses around each name
    names[j] = `(${names[j]})`;
  }

  return names.join("");
}
// Tests
console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  ) ===
    "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"
);
console.log(
  meeting(
    "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"
  ) ===
    "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"
);
console.log(
  meeting(
    "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"
  ) ===
    "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"
);

console.log(
  meeting(
    "Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve"
  ) ===
    "(BELL, MEGAN)(GATES, ANTONY)(GATES, GRACE)(META, ALISSA)(RUDD, ELIZABETH)(RUSSELL, JAMES)(STAN, AMANDY)(STAN, VICTORIA)(STEVE, ANNA)(WAHL, ALEX)(WAHL, ANNA)(WAHL, JACOB)"
);

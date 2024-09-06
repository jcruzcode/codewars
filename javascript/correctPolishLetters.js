/*
======== Polish Alphabet (8 kyu) ========
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

1) Parameters - A string containing Polish letters.
2) Return - A string with the Polish letters replaced.
3) Examples - see tests
4) Pseudocode - see comments

*/
function correctPolishLetters(string) {
  const polish = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  // Replace the Polish letters in string given
  // mapping above
  return string
    .split("")
    .map((char) => {
      return char in polish ? polish[char] : char;
    })
    .join("");
}

// Tests
console.log(correctPolishLetters("Jędrzej Błądziński")    ,"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa")           ,"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
console.log(correctPolishLetters("Joanna Jędrzejczyk")    , "Joanna Jedrzejczyk");
console.log(correctPolishLetters("Jan Błachowicz")        , "Jan Blachowicz");


// WeIrD StRiNg CaSe (6 kyu)
function toWeirdCase(string) {
  let changed,
    words,
    index = 0;

  if (!string.includes(" ")) {
    changed = string.split("");
    for (let i = 0; i < changed.length; i++) {
      i % 2 === 0
        ? (changed[i] = changed[i].toUpperCase())
        : (changed[i] = changed[i].toLowerCase());
    }
    return changed.join("");
  }

  words = string.split(" ").map((word) => word.split(""));

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      i % 2 === 0
        ? (word[i] = word[i].toUpperCase())
        : (word[i] = word[i].toLowerCase());
    }
    words[index] = word.join("");
    index++;
  }
  return words.join(" ");
}

console.log(toWeirdCase("This") === "ThIs");
console.log(toWeirdCase("is") === "Is");
console.log(toWeirdCase("This is a test") === "ThIs Is A TeSt");

function longestRepetition(s) {
  // Case: s is an empty string ""
  if (s === "") return ["", 0];

  const repeats = [];
  let tmp = "",
    previous;

  for (let i = 0; i < s.length; i++) {
    // Concat. first char with tmp
    if (i === 0) tmp += s[i];

    if (i > 0) {
      if (previous === s[i]) {
        // Concat. repeated chars
        tmp += s[i];
      } else {
        // Case: Current char not equal to previous
        // Add [char, char length] to repeats
        repeats.push([tmp[0], tmp.length]);
        // Temporary string 'tmp' becomes current char
        tmp = s[i];
      }

      // Case: Last char in string 's'
      if (i === s.length - 1) {
        repeats.push([tmp[0], tmp.length]);
      }
    }
    // Current char becomes previous char on next iteration
    previous = s[i];
  }
  // Sort repeat strings by descending string length
  repeats.sort((a, b) => b[1] - a[1]);

  return repeats[0];
}

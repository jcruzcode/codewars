// First non-repeating character (5 kyu)
function firstNonRepeatingLetter(s) {
  const lower = s.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      return s[i];
    }
  }

  return "";
}
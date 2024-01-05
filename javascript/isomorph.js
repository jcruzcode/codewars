// Check if two words are isomorphic to each other (6 kyu)
function isomorph(a, b) {
  // Not isomorph if lengths differ
  if (a.length !== b.length) return false;

  const charMap = {};

  for (let i = 0; i < a.length; i++) {
    // Check if current letter in string a is a key in charMap
    if (charMap[a[i]]) {
      // Not isomorph if the current letter in string a
      // corresponds to more than one letter in b
      if (charMap[a[i]] !== b[i]) return false;
    } else {
      // Store mapping
      charMap[a[i]] = b[i];
    }
  }

  // Get an array of property values from charMap
  const values = Object.values(charMap);

  for (let value of values) {
    // Not isomorph if the same letter is a repeated
    // property value
    if (values.indexOf(value) !== values.lastIndexOf(value)) {
      return false;
    }
  }

  // Otherwise, a and b are isomorphs
  return true;
}

console.log(isomorph("CBAABC", "DEFFED"), true);
console.log(isomorph("XXX", "YYY"), true);
console.log(isomorph("RAMBUNCTIOUSLY", "THERMODYNAMICS"), true);

console.log(isomorph("AB", "CC"), false);
console.log(isomorph("XXY", "XYY"), false);
console.log(isomorph("ABAB", "CD"), false);

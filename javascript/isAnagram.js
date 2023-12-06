// Anagram Detection (7 kyu)
var isAnagram = function(test, original) {
    const strings = [test, original];
    
    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i].toLowerCase()
                             .split('')
                             .sort()
                             .join('');    
    }
  
    return strings[0] === strings[1];
};
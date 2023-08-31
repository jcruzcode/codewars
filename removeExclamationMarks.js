//8 kyu Remove exclamation marks
function removeExclamationMarks(s) {
    let str = ''; // empty string
    
    // loop through each character of s
    for ( let i = 0; i < s.length; i++) {
      if ( s[i] !== '!') {
        // concat with str if not an exclamation point
        str += s[i];
      }
    }
    
    return str;
}
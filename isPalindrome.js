function isPalindrome(str) {
    // convert str to lowercase
    str = str.toLowerCase();
    
    // split characters into array
    const chars = str.split('');
    
    // reverse chars
    let reverseChars = [];
    for (let i = chars.length - 1; i >= 0; i--) {
      reverseChars.push(chars[i]);
    }
    
    // Check to see if there is a character
    // that doesn't match
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] !== reverseChars[i]) {
        // not a palindrome
        return false; 
      }
    }
    
    // otherwise, palindrome
    return true;
  }
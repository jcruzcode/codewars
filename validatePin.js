function validatePIN (pin) {
    // Make sure pin is a string
    pin = String(pin);
    
    // Regex for a string that can only contain 4 or 6 digits
    let regex = /^(\d{4}|\d{6})$/;
    
    /*   
        ^: Matches the beginning of the string.
        \d: Matches any digit.
       {4}: Matches the preceding item (in this case, a digit) exactly 4 times.
         |: Acts as a logical OR, allowing for either the pattern before or after it.
       {6}: Matches the preceding item (in this case, a digit) exactly 6 times.
         $: Matches the end of the string. 
    */
    
    //return true if pin matches the regex, otherwise return false
    return regex.test(pin);
    
  }
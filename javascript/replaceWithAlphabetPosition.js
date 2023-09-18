function alphabetPosition(text) {
    let numString = ''; // Empty string to concatenate numbers with
    
    // Convert text to all lowercase characters
    text = text.toLowerCase();
    
    // for loop examines each character in the string text
    // if a letter, replace with its position in the alphabet
    // if not a letter, ignore it
    
    for(let i = 0; i < text.length; i++) {
      // switch statement handles replacing letter with position
      // concatenates number with numString
      
      switch(text[i]) {
          case 'a':
            numString += '1 ';
            break;
          case 'b':
            numString += '2 ';
            break;
          case 'c':
            numString += '3 ';
            break;
          case 'd':
            numString += '4 ';
            break;
          case 'e':
            numString += '5 ';
            break;
          case 'f':
            numString += '6 ';
            break;
          case 'g':
            numString += '7 ';
            break;
          case 'h':
            numString += '8 ';
            break;
          case 'i':
            numString += '9 ';
            break;
          case 'j':
            numString += '10 ';
            break;
          case 'k':
            numString += '11 ';
            break;
          case 'l':
            numString += '12 ';
            break;
          case 'm':
            numString += '13 ';
            break;
          case 'n':
            numString += '14 ';
            break;
          case 'o':
            numString += '15 ';
            break;
          case 'p':
            numString += '16 ';
            break;
          case 'q':
            numString += '17 ';
            break;
          case 'r':
            numString += '18 ';
            break;
          case 's':
            numString += '19 ';
            break;
          case 't':
            numString += '20 ';
            break;
          case 'u':
            numString += '21 ';
            break;
          case 'v':
            numString += '22 ';
            break;
          case 'w':
            numString += '23 ';
            break;
          case 'x':
            numString += '24 ';
            break;
          case 'y':
            numString += '25 ';
            break;
          case 'z':
            numString += '26 ';
            break;
      }  
    }
    
    // trim whitespace at the end of numString
    numString = numString.trimEnd();
    
    // Return string represented as a string of positions in the alphabet
    return numString;
    
  }
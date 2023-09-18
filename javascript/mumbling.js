function accum(s) {
	// Variable declarations
  let num;
  let result = []; // empty array to append string to
  
  // Outer loop - loops through each character in the string, s
  for(let i = 0; i < s.length; i++) {
    num = i + 1; // The position of the character and number of times to repeat
    let string = ""; // initialize empty string each round to concatenate with
    
    // Inner loop - loops the number of times a character should repeat based on num
    for(let j = 0; j < num; j++) {
      // For the first character, capitalize the character and concat.
      if(j === 0) {
        // Concat. with proper letter
        switch(s[i].toLowerCase()) { // make current character lowercase before evaluating switch-case
            case 'a':
              string += 'A';
              break;
            case 'b':
              string += 'B';
              break;
            case 'c':
              string += 'C';
              break;
            case 'd':
              string += 'D';
              break;
            case 'e':
              string += 'E';
              break;
            case 'f':
              string += 'F';
              break;
            case 'g':
              string += 'G';
              break;
            case 'h':
              string += 'H';
              break;
            case 'i':
              string += 'I';
              break;
            case 'j':
              string += 'J';
              break;
            case 'k':
              string += 'K';
              break;
            case 'l':
              string += 'L';
              break;
            case 'm':
              string += 'M';
              break;
            case 'n':
              string += 'N';
              break;
            case 'o':
              string += 'O';
              break;
            case 'p':
              string += 'P';
              break;
            case 'q':
              string += 'Q';
              break;
            case 'r':
              string += 'R';
              break;
            case 's':
              string += 'S';
              break;
            case 't':
              string += 'T';
              break;
            case 'u':
              string += 'U';
              break;
            case 'v':
              string += 'V';
              break;
            case 'w':
              string += 'W';
              break;
            case 'x':
              string += 'X';
              break;
            case 'y':
              string += 'Y';
              break;
            case 'z':
              string += 'Z';
              break;
        }
      } else { // Otherwise, concat. with lowercase character
        switch(s[i].toLowerCase()) {
            case 'a':
              string += 'a';
              break;
            case 'b':
              string += 'b';
              break;
            case 'c':
              string += 'c';
              break;        
            case 'd':
              string += 'd';
              break;           
            case 'e':
              string += 'e';
              break;           
            case 'f':
              string += 'f';
              break;           
            case 'g':
              string += 'g';
              break;
            case 'h':
              string += 'h';
              break;
            case 'i':
              string += 'i';
              break;
            case 'j':
              string += 'j';
              break;
            case 'k':
              string += 'k';
              break;
            case 'l':
              string += 'l';
              break;
            case 'm':
              string += 'm';
              break;
            case 'n':
              string += 'n';
              break;
            case 'o':
              string += 'o';
              break;
            case 'p':
              string += 'p';
              break;
            case 'q':
              string += 'q';
              break;
            case 'r':
              string += 'r';
              break;
            case 's':
              string += 's';
              break;
            case 't':
              string += 't';
              break;
            case 'u':
              string += 'u';
              break;
            case 'v':
              string += 'v';
              break;
            case 'w':
              string += 'w';
              break;
            case 'x':
              string += 'x';
              break;
            case 'y':
              string += 'y';
              break;
            case 'z':
              string += 'z';
              break;
      }
      
    }
    
  }
  // Add the string to the array 'result'
  result.push(string);
}
  // Join the elements of the array 'result' with the character '-', then return
  return result.join('-');
}
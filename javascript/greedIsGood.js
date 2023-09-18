function score( dice ) {
  
    // Object to count occurences of elements in dice
    const count = {};
      
    // For each element in dice...
    for (let roll of dice) {
      if (count[roll]) {
        // if a key equal to roll exists in count, then increment its value
        count[roll] += 1;
      } else {
        // otherwise, this is the first occurrence and set to 1
        count[roll] = 1;
      }
    }
      
    let score = 0; // initialize score to 0
    
    // Loop calculates score by checking for the number of occurences of each number 1 through 6 inclusive
    for (let number = 1; number < 7; number++) {
      if (count[number] === 5) {
        // Calculate score for 5 occurences of one number
        switch(number) {
          case 1:
            score += 1200;
            break;
          case 2:
            score += 200;
            break;
          case 3:
            score += 300;
            break;
          case 4:
            score += 400;
            break;
          case 5:
            score += 600;
            break;
          case 6:
            score += 600;
            break;
        }
      } else if (count[number] === 4) {
        // Calculate score for 4 occurences of one number
        switch(number) {
          case 1:
            score += 1100;
            break;
          case 2:
            score += 200;
            break;
          case 3:
            score += 300;
            break;
          case 4:
            score += 400;
            break;
          case 5:
            score += 550;
            break;
          case 6:
            score += 600;
            break;
        }
      } else if (count[number] === 3) {
        // Calculate score for 3 occurences of one number
        switch(number) {
          case 1:
            score += 1000;
            break;
          case 2:
            score += 200;
            break;
          case 3:
            score += 300;
            break;
          case 4:
            score += 400;
            break;
          case 5:
            score += 500;
            break;
          case 6:
            score += 600;
            break;
        }
      } else if (count[number] === 2) {
        // Calculate score for 2 occurences of 1 or 5
          switch(number) {
            case 1:
              score += 200;
              break;
            case 5:
              score += 100;
              break;
          }
      } else if (count[number] === 1) {
        // Calculate score for an occurence of 1 or 5
          switch(number) {
            case 1:
              score += 100;
              break;
            case 5:
              score += 50;
              break;
          }
      }
    }
      
    // Return total score
    return score;
      
    }
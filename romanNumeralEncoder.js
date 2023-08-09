// convert the number to a roman numeral
function solution(number){
    let romanNumerals = ''; // Empty string to add roman numerals to
    
    // the while loop continues until number equals 0
    while(number > 0) {
      // conditionals check if the number is equal to a number or lies within a certain range
      // if the condition is true, corresponding roman numeral(s) are concatenated to romanNumerals
      // also, the variable number is decremented by the number representing the associated roman numeral(s)
    
      if(number >= 1000) {
          romanNumerals += 'M';
          number -= 1000;
        
      } else if(number <= 999 && number >= 900) {
          romanNumerals += 'CM';
          number -= 900;
        
      } else if(number <= 899 && number >= 400) {
          if(number <= 899 && number >= 800) {
            romanNumerals += 'DCCC';
            number -= 800;
          } else if(number <= 799 && number >= 700) {
            romanNumerals += 'DCC';
            number -= 700;
          } else if(number <= 699 && number >= 600) {
            romanNumerals += 'DC';
            number -= 600;
          } else if(number <= 599 && number >= 500) {
            romanNumerals += 'D';
            number -= 500;
          } else if(number <= 499 && number >= 400) {
            romanNumerals += 'CD';
            number -= 400;
          }
        
      } else if( number <= 399 && number >= 90) {
          if(number <=399 && number >=300) {
            romanNumerals += 'CCC';
            number -= 300;
          } else if(number <=299 && number >=200) {
            romanNumerals += 'CC';
            number -= 200;
          } else if(number <=199 && number >=100) {
            romanNumerals += 'C';
            number -= 100;
          } else if(number <= 99 && number >= 90) {
            romanNumerals += 'XC';
            number -= 90;
          }
        
      } else if(number <= 89 && number >= 40) {
          if (number <= 89 && number >= 80) {
            romanNumerals += 'LXXX';
            number -= 80;
          } else if(number <= 79 && number >= 70) {
            romanNumerals += 'LXX';
            number -= 70;
          } else if(number <= 69 && number >= 60) {
            romanNumerals += 'LX';
            number -= 60;
          } else if(number <= 59 && number >= 50) {
            romanNumerals += 'L';
            number -= 50;
          } else if(number <= 49 && number >= 40) {
            romanNumerals += 'XL';
            number -= 40;
          }
        
      } else if(number <= 39 && number >= 9) {
          if(number <= 39 && number >= 30) {
            romanNumerals += 'XXX';
            number -= 30;
          } else if(number <= 29 && number >= 20) {
            romanNumerals += 'XX';
            number -= 20;
          } else if(number <= 19 && number >= 10) {
            romanNumerals += 'X';
            number -= 10;
          } else if(number === 9) {
            romanNumerals += 'IX';
            number -= 9;
          }
        
      } else if(number === 8) {
          romanNumerals += 'VIII';
          number -= 8;
      } else if(number === 7) {
          romanNumerals += 'VII';
          number -= 7;
      } else if(number === 6) {
          romanNumerals += 'VI';
          number -= 6;
      } else if(number === 5) {
          romanNumerals += 'V';
          number -= 5;
      } else if(number === 4) {
          romanNumerals += 'IV';
          number -= 4;
      } else if(number === 3) {
          romanNumerals += 'III';
          number -= 3;
      } else if(number === 2) {
          romanNumerals += 'II';
          number -= 2;
      } else if(number === 1) {
          romanNumerals += 'I';
          number -= 1;
      }
      
    }
    
    return romanNumerals; // return the string of roman numerals
  }
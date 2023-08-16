function solution(str){
    // split string into characters, reverse order, and store in array
    let array = str.split('').reverse();
    
    // Create reversed string
    let reverseStr = '';
    array.forEach(letter => reverseStr += letter); // concatenates each letter
    
    // return reversed string
    return reverseStr;
    
  }
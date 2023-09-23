// 6 kyu - Which are in?
// Given two arrays of strings a1 and a2, inArray
// returns a sorted array r in lexicographical
// order of the strings of a1 which are  substrings 
// of strings of a2.
function inArray(array1,array2){
    let substrings = [];
    
    for ( let i = 0; i < array1.length; i++ ) {
      for ( let j = 0; j < array2.length; j++ ) {
        
        if ( array2[j].includes(array1[i]) && !substrings.includes(array1[i]) ) {
          substrings.push(array1[i]);  
        }
        
      }
      
    } 

    return substrings.sort();
}

console.log(inArray(["live", "strong", "arp"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] ));
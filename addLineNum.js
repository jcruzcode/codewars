// 7 kyu Testing 1-2-3
var number = function(array){
    let lineNum = 1; // start line numbering at 1
    
    // loop through array and prepend line number to each element
    for (let i = 0; i < array.length; i++) {
      array[i] = `${lineNum}: ` + array[i];
      lineNum += 1; // increment lineNum by 1
    }
    
    return array;
}
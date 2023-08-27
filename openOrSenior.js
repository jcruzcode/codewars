function openOrSenior(data){
    // Empty array to contain output
    let output = [];
    // Loop with conditional to determine whether Open or Senior
    data.forEach(item => {
       if( item[0] >= 55 && item[1] > 7) {
         output.push("Senior");
       } else {
         output.push("Open");
       }
    });
    
    return output;
}
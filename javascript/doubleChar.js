function doubleChar(str) {
    let doubles = "";
    
    for ( let i = 0; i < str.length; i++ ) 
    {
      doubles += str[i].repeat(2);  
    }
    
    return doubles;
}
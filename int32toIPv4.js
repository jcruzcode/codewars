function int32ToIp(int32){
    
    let backwardString = ''; 
    let number = Number(int32); 
    let quotient, remainder; 
    const base = 2; 

    
    while (number > 0){
      
      quotient = Math.floor(number/base);
      remainder = number - quotient*base;
      
      
      backwardString += remainder;
      
      
      number = quotient;
    }
  
   
    let leadZeros = 32 - backwardString.length;
  
    
    for(let i = 0; i < leadZeros; i++){
      backwardString += 0;
    }
  
    
    let dotNotation = ''; 
    for (let k = 0; k < backwardString.length; k++) {
        if (k === 7 || k === 15 || k === 23) {
            let str = backwardString[k] + '.'; 
            dotNotation += str;
        } else {
            dotNotation += backwardString[k];
        }
    }
  
   
    const octets = dotNotation.split('.');
    const decimals = []; 
  
    
  
    for (let y = 0; y < octets.length; y++) {
      let sum = 0; 
      
      for(let x = 0; x < octets[y].length; x++){
        if(octets[y][x] == 1) {
         
          sum += base**x; 
          
      }
        
    }
      
      decimals.push(sum);
    }
  
    let finalStr = ''; 
  

    for (let z = decimals.length - 1; z >= 0; z--) {
  
     
      if (z !== 0) {
        let dotAdded = decimals[z] + '.';
        finalStr += dotAdded;
      } else {
        
        finalStr += decimals[z];
      }
    }
  
    
    return finalStr;
  
  }
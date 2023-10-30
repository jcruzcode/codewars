// 6 kyu - Calculate the function f(x) for a simple linear sequence (Easy)
function getFunction(sequence) {
    if ( !isLinear(sequence) ) {
      return "Non-linear sequence";
    }
  
    const slope = sequence[1] - sequence[0];
    const yInt = sequence[0];
  
    if ( slope === 0 && yInt === 0 ) {
      return `f(x) = 0`;
    } else if ( slope === 0 ) {
      return `f(x) = ${yInt}`;
    } else if ( yInt === 0 ) {
      
      if ( slope === 1) {
        return `f(x) = x`;
      } else if ( slope === -1 ) {
        return `f(x) = -x`;
      }
      return `f(x) = ${slope}x`;
      
    } else if ( yInt < 0 ) {
      
      if ( slope === 1) {
        return `f(x) = x - ${ -1 * yInt }`;
      } else if ( slope === -1 ) {
        return `f(x) = -x - ${ -1 * yInt }`;
      }
      return `f(x) = ${slope}x - ${ -1 * yInt }`;
      
    } else {
      
      if ( slope === 1) {
        return `f(x) = x + ${yInt}`;
      } else if ( slope === -1 ) {
        return `f(x) = -x + ${yInt}`;
      }
      return `f(x) = ${slope}x + ${yInt}`;
      
    }
  
  
  }
  
  function isLinear(arr){
    let tmp = arr[0];
    let diff = arr[1] - tmp, sub;
    for (let i = 1; i < arr.length; i++) {
       sub = arr[i] - tmp;
       if (diff !== sub) {
          return false;
       }
       
       tmp = arr[i];
    }
  
    return true;
  }
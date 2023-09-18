function quadraticFormula(y1,y2,y3) {
    // Variable declarations
    let formula, formulaString, fourthNum, fifthNum, termMid, termEnd;
    
    // The form of the quadratic equation is x^2 + bx + c, where b and c are integers
    termMid = y2-y1-3; // Calculate the linear term (bx) of the quadratic equation
    termEnd = 2*y1 - y2 + 2; // Calculate the constant term (c) of the quadratic equation
    
    // equation calculates the nth term of the quadratic sequence 
    const equation = (num) => {
      return num**2 + termMid*num + termEnd; // quadratic equation
    }
    
    // Function calls to equation to determine the 4th and 5th terms
    fourthNum = equation(4);
    fifthNum = equation(5);
    
    /* The conditionals check if the linear term (termMid) is +/- 1, if the constant (termEnd)
      or linear term are 0, and the sign of the constant and linear terms 
      to determine how the equation will be formatted */
    
    if(termMid < 0 && termEnd > 0 && termMid !== -1) { // linear term negative but not -1 and constant positive
      formulaString = `x^2${termMid}x+${termEnd}`;
    } else if(termMid > 0 && termEnd < 0 && termMid !== 1) { // linear term positive and not 1 and constant negative
       formulaString = `x^2+${termMid}x${termEnd}`;
    } else if(termMid < 0 && termEnd < 0 && termMid !== -1){ // linear term negative (not -1) and constant negative 
      formulaString = `x^2${termMid}x${termEnd}`;
    } else if(termMid === 1) { // linear term has 1 as the coefficient 
      if(termEnd === 0) { // 1 is omitted as a coefficient and is now implied like in math
          formulaString = `x^2+x`;
        } else if(termEnd < 0) {
          formulaString = `x^2+x${termEnd}`;
        } else {
          formulaString = `x^2+x+${termEnd}`;
        }
    }  else if(termMid === -1) {// linear term has -1 as the coefficient 
       if(termEnd === 0) {// 1 is omitted as a coefficient and is now implied like in math
          formulaString = `x^2-x`;
        } else if(termEnd < 0) {
          formulaString = `x^2-x${termEnd}`;
        } else {
          formulaString = `x^2-x+${termEnd}`;
        }
    }  else if(termMid === 0) { // linear term is 0
        if(termEnd === 0) {// linear term that's 0 is omitted as it is now implied like in math
          formulaString = `x^2`;
        } else if(termEnd < 0) {
          formulaString = `x^2${termEnd}`;
        } else {
          formulaString = `x^2+${termEnd}`;
        }
    } else if(termEnd === 0){ // end term 0
      if(termMid === 0){ // constant term that's 0 is omitted as it is implied
        formulaString = `x^2`;
      } else if(termMid < 0){
        formulaString = `x^2${termMid}x`;
      } else {
        formulaString = `x^2+${termMid}x`;
      }
    }
    else {
      formulaString = `x^2+${termMid}x+${termEnd}`; // both constant and linear term are positive 
    }
    
    // return an array with the neatly formatted formula, the fourth and fifth terms of the quadratic sequence
    return [formulaString, fourthNum, fifthNum];
  }
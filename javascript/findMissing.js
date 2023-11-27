// Find the missing term in an Arithmetic Progression (6 kyu)
var findMissing = function (list) {  
    const len = list.length;
  
    const firstTerm = list[0];
    const lastTerm = list[len - 1];
    const difference = ( lastTerm - firstTerm ) / len;
    let nextTerm;
  
    for ( let i = 1; i <= len - 1; i++ ) {
      nextTerm = firstTerm + i * difference;
      if ( nextTerm !== list[i] ) return nextTerm;
    }
  
  }
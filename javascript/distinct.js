function distinct(a) {
    let numbers = [];
    
    for ( let number of a ) {
      if ( !numbers.includes(number) )
        numbers.push(number);
    }
    
    return numbers;
}

console.log()
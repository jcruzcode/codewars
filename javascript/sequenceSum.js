/* 7 kyu - Sum of a sequence */
const sequenceSum = (begin, end, step) => {
    // Cases: begin > end or begin equals end
    if ( begin > end ) {
      return 0;
    } else if (begin === end) {
      return begin;
    }
    
    // Case: begin < end
    // Array to hold sequence of numbers
    let numbers = [];
    // Add 'begin' to 'numbers'
    numbers.push(begin);
    
    // while loop creates array of sequence numbers
    // and terminates when begin > end
    while ( begin <= end ) {
        // increment 'begin' by 'step' and reassign
        begin += step;
        
        // Add new value of 'begin' to 'numbers'
        numbers.push(begin);
    }
    
    if (numbers[ numbers.length - 1 ] > end) {
      // remove last element
      numbers.pop();
      // calculate and sum of sequence and return
      return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
    } else {
      // calculate and sum of sequence and return
      return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    
};

console.log(sequenceSum(2, 6, 2));
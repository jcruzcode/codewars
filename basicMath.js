/* 8 kyu - Keep Hydrated! */
function basicOp(operation, value1, value2) {
    // Switch statement evaluates the value of 'operation'
    // and performs the proper arithmetic operation
    switch( operation ) {
        case '+':
          return value1 + value2;
        case '-':
          return value1 - value2;
        case '*':
          return value1 * value2;
        case '/':
          return value1 / value2;
    }
}
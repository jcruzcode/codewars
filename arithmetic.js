/* 7 kyu - Make a function that does arithmetic! */

function arithmetic(a, b, operator){
    // Switch statement evaluates which 
    // arithmetic operation to perform 
    switch ( operator ) {
        case "add":
          return a + b;
        case "subtract":
          return a - b;
        case "multiply":
          return a * b;
        case "divide":
          return a / b;
    }
}
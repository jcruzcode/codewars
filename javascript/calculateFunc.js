/*
===== Calculating with Functions (5 kyu) =====
This time we want to write calculations using functions and get the results. 

Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    
    There must be a function for each of the following mathematical operations: 
    plus, minus, times, dividedBy
    
    Each calculation consist of exactly one operation and two numbers
    
    The most outer function represents the left operand, the most inner function 
    represents the right operand
    
    Division should be integer division. For example, this should return 2, not 
    2.666666...:

eight(dividedBy(three()));

1) Parameters - Functions zero through nine, times, plus, minus, and divided by.
2) Return - An integer which is the result of a calculation using integers and
            +, -, *, or /
3) Examples - see tests
4) Pseudocode - see comments

*/
// For each function named after a digit 0-9, no input given returns the digit
// otherwise, the arithmetic expression is evaluated
function zero(input) {
  return input === undefined
    ? 0
    : input.includes("/")
    ? Math.floor(eval(`0${input}`)) // for integer division 
    : eval(`0${input}`);
}
function one(input) {
  return input === undefined
    ? 1
    : input.includes("/")
    ? Math.floor(eval(`1${input}`))
    : eval(`1${input}`);
}
function two(input) {
  return input === undefined
    ? 2
    : input.includes("/")
    ? Math.floor(eval(`2${input}`))
    : eval(`2${input}`);
}
function three(input) {
  return input === undefined
    ? 3
    : input.includes("/")
    ? Math.floor(eval(`3${input}`))
    : eval(`3${input}`);
}
function four(input) {
  return input === undefined
    ? 4
    : input.includes("/")
    ? Math.floor(eval(`4${input}`))
    : eval(`4${input}`);
}
function five(input) {
  return input === undefined
    ? 5
    : input.includes("/")
    ? Math.floor(eval(`5${input}`))
    : eval(`5${input}`);
}
function six(input) {
  return input === undefined
    ? 6
    : input.includes("/")
    ? Math.floor(eval(`6${input}`))
    : eval(`6${input}`);
}
function seven(input) {
  return input === undefined
    ? 7
    : input.includes("/")
    ? Math.floor(eval(`7${input}`))
    : eval(`7${input}`);
}
function eight(input) {
  return input === undefined
    ? 8
    : input.includes("/")
    ? Math.floor(eval(`8${input}`))
    : eval(`8${input}`);
}
function nine(input) {
  return input === undefined
    ? 9
    : input.includes("/")
    ? Math.floor(eval(`9${input}`))
    : eval(`9${input}`);
}

// The functions representing arithmetic operations return a string with the
// operator symbol prepended to the number given
function plus(number) {
  return `+${number}`;
}
function minus(number) {
  return `-${number}`;
}
function times(number) {
  return `*${number}`;
}
function dividedBy(number) {
  return `/${number}`;
}

// Tests
//console.log(zero(), 0);
//console.log(one(), 1);
//console.log(two(), 2);
//console.log(three(), 3);
//console.log(four(), 4);
//console.log(five(), 5);
//console.log(six(), 6);
//console.log(seven(), 7);
//console.log(eight(), 8);
//console.log(nine(), 9);
//
//console.log(plus(3), '+3');
//console.log(minus(21), '-21');
//console.log(times(5), "*5");
//console.log(dividedBy(10), '/10');
console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);

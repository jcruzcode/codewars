/*
======== Regular Ball Super Ball (8 kyu) ========

Create a class Ball. Ball objects should accept one argument for "ball type" 
when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of
"regular."

Examples

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

1) Parameter - Type of ball given a string
2) Return - Calling object with property ballType returns "regular" if no
            argument given. Otherwise, return the string given when
            instantiating Ball object.
3) Examples - See tests
4) Pseudocode - See comments

*/

class Ball {
    // Use constructor for ballType property
    // Default value for type is "regular" when no argument is given
    constructor(type = "regular") {
        this.ballType = type;
    } 
}
// Tests
const ball1 = new Ball();
const ball2 = new Ball("super");
console.log(ball1.ballType === "regular"); 
console.log(ball2.ballType === "super");
/*
======= Number of People in the Bus (7 kyu) =======
There is a bus moving in the city which takes and drops some people at each bus 
stop.

You are provided with a list (or array) of integer pairs. 

Elements of each pair represent the number of people that get on the bus 
(the first item) and the number of people that get off the bus (the second item)
at a bus stop.

Your task is to return the number of people who are still on the bus after the 
last bus stop (after the last array). 

Even though it is the last bus stop, the bus might not be empty and some people 
might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the 
bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in 
the first bus stop.

1) Parameters - An array of integers pairs. In each pair the first number is the
number of passengers getting on the bus and the second number is the number of 
passengers getting off.

2) Return - The number of people still on the bus after the last bus stop

3) Examples - see tests

4) Pseudocode - see comments

*/

function number(busStops) {
    // For each pair of numbers in busStops, subtract the second number from the
    // first number and add it to a running sum.
    let sum = 0;

    for (let stop of busStops) {
        sum += (stop[0] - stop[1]);
    }

    return sum;
}

// Test cases
console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);
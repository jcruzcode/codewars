/*
======= Deodorant Evaporator (7 kyu) =======
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the 
percentage of foam or gas lost every day (evap_per_day) and the 
threshold (threshold) in percentage beyond which the evaporator 
is no longer useful. 

All numbers are strictly positive.

The program reports the nth day (as an integer) on which the 
evaporator will be out of use.

Example:

evaporator(10, 10, 5) -> 29

Note:

Content is in fact not necessary in the body of the function
"evaporator", you can use it or not use it, as you wish. 

Some people might prefer to reason with content, some other 
with percentages only. 

It's up to you but you must keep it as a parameter because the 
tests have it as an argument.

1) Parameters - Three numbers: 
                content - representing the content of the evaporator in ml
                evap_per_day - percentage of foam lost every day
                threshold - percentage beyond which the evaporator is no
                            longer useful
2) Return - The nth day, as an integer, on which the evaporator will be out of use.
3) Examples - see tests
4) Pseudocode - see comments

*/

function evaporator(content, evap_per_day, threshold) {
  let volume = content, count = 0;
  // Calculate the volume limit of the threshold
  const limit = (threshold / 100) * volume;
  
  // Subtract the percentage of volume evaporated each day
  // and count how many days pass until volume is less
  // than limit
  do {
    volume -= (evap_per_day / 100) * volume;
    count++;
  } while (volume >= limit);

  return count;
}

// Tests
console.log(evaporator(10,10,10), 22);
console.log(evaporator(10,10,5), 29);

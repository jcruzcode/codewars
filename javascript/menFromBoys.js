/*
======= Sort Out The Men From Boys (7 kyu) =======
Scenario

Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd

Task

Given an array/list [] of n integers , Separate The even numbers from the odds,
or Separate the men from the boys

Notes

    Return an array/list where Even numbers come first then odds

    Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

    Array/list size is at least 4 .

    Array/list numbers could be a mixture of positives , negatives .

    Have no fear , It is guaranteed that no Zeroes will exists . 

    Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

1) Parameter - An array of integers, arr.
2) Return - An array where even numbers come first, then odd with even numbers in ascending order and odd numbers
            in descending order.
3) Examples - see tests
4) Pseudocode - see comments

*/
function menFromBoys(arr) {
  // Separate even and odd integers
  const evens = arr.filter((num) => num % 2 === 0);
  const odds = arr.filter((num) => num % 2 !== 0);
  // Sort evens ascending and odds descending
  evens.sort((a, b) => a - b);
  odds.sort((a, b) => b - a);
  // Add the odds to the end of the evens array 
  // and remove duplicate integers
  return Array.from(new Set(evens.concat(odds)));
}

// Tests
console.log(menFromBoys([7,3,14,17])                      , [14,17,7,3]);
console.log(menFromBoys([2,43,95,90,37])                  , [2,90,95,43,37]);
console.log(menFromBoys([20,33,50,34,43,46])              , [20,34,46,50,43,33]);
console.log(menFromBoys([82,91,72,76,76,100,85])          , [72,76,82,100,91,85]);
console.log(menFromBoys([2,15,17,15,2,10,10,17,1,1])      , [2,10,17,15,1]);
console.log(menFromBoys([-32,-39,-35,-41])                , [-32,-35,-39,-41]);
console.log(menFromBoys([-64,-71,-63,-66,-65])            , [-66,-64,-63,-65,-71]);
console.log(menFromBoys([-94,-99,-100,-99,-96,-99])       , [-100,-96,-94,-99]);
console.log(menFromBoys([-53,-26,-53,-27,-49,-51,-14])    , [-26,-14,-27,-49,-51,-53]);
console.log(menFromBoys([-17,-45,-15,-33,-85,-56,-86,-30]), [-86,-56,-30,-15,-17,-33,-45,-85]);
console.log(menFromBoys([12,89,-38,-78])                  , [-78,-38,12,89]);
console.log(menFromBoys([2,-43,95,-90,37])                , [-90,2,95,37,-43]);
console.log(menFromBoys([82,-61,-87,-12,21,1])            , [-12,82,21,1,-61,-87]);
console.log(menFromBoys([63,-57,76,-85,88,2,-28])         , [-28,2,76,88,63,-57,-85]);
console.log(menFromBoys([49,818,-282,900,928,281,-282,-1]), [-282,818,900,928,281,49,-1]);

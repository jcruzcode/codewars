/*
======== How many lightsabers do you own? (8 kyu) ========
Inspired by the development team at Vooza, write the function that

    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.

The only person who owns lightsabers is Zach, by the way. 

He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

1) Parameter - An optional string parameter, name.
2) Return - 18 if name is Zach, otherwise 0.
3) Examples - see tests
4) Pseudocode - see comments

*/

export function howManyLightsabersDoYouOwn(name?: any): number {
  return name === "Zach" ? 18 : 0;
}

// Tests
console.log(howManyLightsabersDoYouOwn("Zach"), 18);
console.log(howManyLightsabersDoYouOwn("Adam"), 0);

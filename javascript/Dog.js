/*
======== Barking mad (8 kyu) ========
Teach snoopy and scooby doo how to bark using object methods.

Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return 'Woof'
scoobydoo.bark(); // undefined

Use method prototypes to enable all Dogs to bark.

1) Parameter - The Dog constructor has one parameter, breed, which is given as a string.
2) Return - "Woof" as a string when the bark method is called on any Dog object.
3) Examples - see tests
4) Pseudocode - see comments

*/

class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return 'Woof';
  }
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');
const luna = new Dog('Siberian Husky')

console.log(snoopy.bark() === "Woof");
console.log(scoobydoo.bark() === "Woof");
console.log(luna.bark() === "Woof");
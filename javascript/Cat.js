/*
======== Classy Extensions (8 kyu) ========
Classy Extensions

Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword.

You will be preloaded with the Animal class, so you should only edit the Cat class.

Task

Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

1) Parameter - constructor - a string, name
               speak       - none
2) Return - Create an overloaded version of speak, where the string returned is name + 'meows.'
3) Examples - see tests
4) Pseudocode - see comments

*/
// Superclass
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} speaks.`;
  }
}
// Subclass
class Cat extends Animal {
  constructor(name) {
    // Invoke constructor of superclass
    super(name);
  }

  // overloaded version of speak
  speak() {
    return `${this.name} meows.`;
  }
}

// Tests
let cat = new Cat("Mr Whiskers");
console.log(cat.speak() === "Mr Whiskers meows.");
cat = new Cat("Lamp");
console.log(cat.speak() === "Lamp meows.");
cat = new Cat("$$Money Bags$$");
console.log(cat.speak() === "$$Money Bags$$ meows.");
console.log(cat instanceof Animal === true, "Your class should extend the Animal class");

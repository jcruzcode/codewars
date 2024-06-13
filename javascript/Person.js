/*
======== Classy Classes (8 kyu) ========
Classy Classes

Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task

Your task is to complete this Class, the Person class has been created. 

You must fill in the Constructor method to accept a name as string and an age as number, 
complete the get Info property and getInfo method/Info getter which should return johns 
age is 34.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

1) Parameters - Two strings name and age (Constructor)
2) Return - A string using name and age (info method)
3) Examples - see test
4) Pseudocode - see comments

*/
class Person {
  constructor(name, age) {
    // Name and age properties
    this.name = name;
    this.age = age;
  }
  // Info getter uses name and age properties and returns 
  // a message stating the person's age
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// Tests
const john = new Person ('john', '34');
console.log(john.info, 'johns age is 34');

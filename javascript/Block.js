/*
======= Building Blocks (7 kyu) ========
Write a class Block that creates a block (Duh..)
Requirements

The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height]
from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`

Examples

    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    
    b.getLength() // -> 4
    
    b.getHeight() // -> 6
    
    b.getVolume() // -> 48
    
    b.getSurfaceArea() // -> 88

Note: no error checking is needed

Any feedback would be much appreciated

1) Parameters - The Block constructor takes an array of numbers of the form [width, length, height] called data.
2) Return - The length, width, height, volume, or surface area of the block, depending on what method is called.
            In all cases, return the property as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
class Block {
  // Initialize width, length, and height of block
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }
  // Calculate volume of a box
  getVolume() {
    return this.length * this.width * this.height;
  }
  // Calculate surface area of a box
  getSurfaceArea() {
    return (
      2 * this.length * this.width +
      2 * this.length * this.height +
      2 * this.width * this.height
    );
  }
}

// Tests
let block = new Block([2,4,6]);

console.log(block.getWidth(),  2)
console.log(block.getLength(), 4)
console.log(block.getHeight(), 6)
console.log(block.getVolume(), 48)
console.log(block.getSurfaceArea(), 88)

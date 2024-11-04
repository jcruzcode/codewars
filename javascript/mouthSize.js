/*
======== The Wide-Mouthed frog! (8 kyu) ========
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. 

But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one 
argument animal which corresponds to the animal encountered by the frog.

If this one is an alligator (case-insensitive) return small otherwise return wide.

1) Parameter - A string, animal.
2) Return - "small" if animal is an alligator, otherwise return "wide"
3) Examples - see tests
4) Pseudocode - see comments

*/
function mouthSize(animal) {
  // Check if animal is an alligator
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

// Tests
console.log(mouthSize("toucan")    === "wide");
console.log(mouthSize("ant bear")  === "wide");
console.log(mouthSize("alligator") === "small");
console.log(mouthSize("ALLIGATOR") === "small");
console.log(mouthSize("AlLiGaToR") === "small");

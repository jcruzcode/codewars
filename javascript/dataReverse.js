/*
====== Data Reverse (6 kyu) ======
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be 
reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

1) Parameters - An array of bits (0s or 1s)
2) Return - An array with the bytes in reverse order.
3) Examples - see tests
4) Pseudocode - see comments

*/
function dataReverse(data) {
    let copy = data.slice(), bytes = [];

    // Slice the copy of data into separate bytes
    while(copy.length > 0) {
        bytes.push(copy.splice(0,8));
    }

    // Reverse the order of bytes
    // Add each element in order to a new empty array
    return [].concat(...bytes.reverse()); 
}

// Tests
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ]),
  [
    1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1,
  ]
);

console.log(
  dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]),
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
);

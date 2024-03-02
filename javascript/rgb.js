/*
===== RGB To Hex Conversion (5 kyu) =====
The rgb function is incomplete. Complete it so that passing in RGB decimal 
values will result in a hexadecimal representation being returned. 

Valid decimal values for RGB are 0 - 255. 
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will 
not work here.

Examples (input --> output):

255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

1) Parameters - Three integer values 0-255, representing red, green and blue colors. 
Any values that fall out of that range must be rounded to the closest valid value.
2) Returns - 6 character long hex value representing rgb colors
3) Examples - see tests
4) Pseudocode - see comments

*/
function rgb(r, g, b) {
  let colors = [r, g, b];

  // ensure input is valid
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] < 0) colors[i] = 0; // no negative numbers
    if (colors[i] > 255) colors[i] = 255; // no numbers greater than 255
  }
  
  // convert each decimal number to a two charcter hex number
  colors = colors.map((color) =>
    color.toString(16).padStart(2, "0").toUpperCase()
  );
  
  // combine colors and return a 6 character hex number
  return colors.join('');
}

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");

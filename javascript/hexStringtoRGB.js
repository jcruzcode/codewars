/*
======Convert A Hex String To RGB (5 kyu)======

****** Description ******
    When working with color values it can sometimes be useful to extract the 
individual red, green, and blue (RGB) component values for a color. Implement a 
function that meets these requirements:

    Accepts a case-insensitive hexadecimal color string as its parameter 
    (ex. "#FF9933" or "#ff9933")
    
    Returns a Map<String, int> with the structure 
    {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of 
hexadecimal notation (ie "#FFF")

1) Parameters -     Accepts a case-insensitive hexadecimal color string as its 
                    parameter (ex. "#FF9933" or "#ff9933")
2) Return(s) -  Returns a Map<String, int> with the structure 
                {r: 255, g: 153, b: 51} where r, g, and b range 
                from 0 through 255
3) Examples - See test cases
4) Psuedocode - see comments
*/

function hexStringToRGB(hexString) {
  // Remove ocothorpe and make a copy of remainging characters
  const hexStr = hexString.slice(1,);
  // Split string into characters
  const chars = hexStr.split('');
  
  // Format into a string with spaces between each char pair
  let formatted = '';
  for ( let i = 0; i < chars.length; i++ ) {
    (i % 2 !== 0) ? formatted += `${chars[i]} ` : formatted += `${chars[i]}`;
  }
  // Trim whitespace on ends and then split into corresponding hex colors
  const colorsValues = formatted.trim().split(' ');
  const colorNames = ['r', 'g', 'b'];
  const rgb = {};

  // Loop over colorNames and assign a key-value pair to rgb with 
  // the property name being the current element in colorNames
  // and the value being the corresponding hex number converted to decimal
  for ( let i = 0; i < colorNames.length; i++) {
    rgb[colorNames[i]] = Number.parseInt(colorsValues[i], 16);
  }

  return rgb;
}

// Test cases
console.log(hexStringToRGB('#FF9933'), {r:255, g:153, b:51})
console.log(hexStringToRGB('#beaded'), {r:190, g:173, b:237})
console.log(hexStringToRGB('#000000'), {r:0, g:0, b:0})
console.log(hexStringToRGB('#111111'), {r:17, g:17, b:17})
console.log(hexStringToRGB('#Fa3456'), {r:250, g:52, b:86})
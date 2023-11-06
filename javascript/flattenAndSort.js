// 7 kyu - Flatten and sort an array

"use strict";

const flattenAndSort = array => array.flat(Infinity).sort((a,b) => a - b);
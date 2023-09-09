/* 8 kyu - Area of Perimeter */
const areaOrPerimeter = function(l , w) {
    // l === w means its a square, return area
    // otherwise, its a rectangle, return perimeter
    return l === w ? l * w : 2*l + 2*w;
};
/* 8 kyu - Difference of Volumes of Cuboids  */

function findDifference(a, b) {
    // Calculate volume of cuboids
    const volumeA = a.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    const volumeB = b.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    
    // return absolute value of their difference
    return Math.abs(volumeA - volumeB);
}
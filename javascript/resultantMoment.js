function rotPred(arr){
    let beforeCount = 0, afterCount = 0;
    const sIndex = arr.findIndex( item => item === 'S');

    for ( let i = 0; i < arr.length; i++ ) { 
        if ( i < sIndex ) {
            beforeCount++;
        } else if ( i > sIndex ) {
            afterCount++;
        }
    }

    if ( beforeCount !== afterCount ) {
        return 'Not a Valid Entry';
    }
    
    let totalMoment = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        if ( i !== sIndex ) {
            totalMoment += arr[i] * ( i - sIndex);
        }
    }

    if ( totalMoment > 0 ) {
        return 'clockwise';
    } else if ( totalMoment < 0 ) {
        return 'anti clockwise'
    } else {
        return 'steady';
    }

}
let arr1 = [2, -3, 1, 2, 'S', 3, -4, 0, 2] // steady 
let arr2 = [2, -3, 1, 2, 'S', 3, -4, -5, 2] // anti clockwise
let arr3 = [2, -3, 1, 2, 'S', 3, -4, -5] // Not a Valid Entry 

console.log(rotPred(arr1));
console.log(rotPred(arr2));
console.log(rotPred(arr3));
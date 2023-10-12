function solve (arr) {
    let ascend = arr.slice(), descend = arr.slice();
    ascend.sort( (a,b) =>  a - b );
    descend.sort( (a,b) =>  b - a );

    function equalArr(arr1, arr2) {
        if ( arr1.length !== arr2.length ) {
            return false;
        }

        for ( let i = 0; i < arr1.length; i++ ) {
            if ( arr1[i] !== arr2[i] ) {
                return false;
            }
        }

        return true;
    } 

    if ( equalArr( arr, ascend ) ) {
        return "A";
    } else if ( equalArr( arr, descend ) ) {
        return "D";
    }

    
    const first = ascend[0];
    const last = ascend[ ascend.length - 1 ];

    const firstIndex = arr.indexOf( first );
    const lastIndex = arr.indexOf( last );

    if ( firstIndex > lastIndex && last > first ) {
        return "RA";
    } 

    return "RD";
}

console.log(solve([6,5,9,8,7]));
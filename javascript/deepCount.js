// 6 kyu - Array Deep Count
function deepCount(a){

    let count = 0;
    let newCount;
    
    for ( let element of a ) {
        count++;

        if ( typeof element === 'object' ) {
            newCount = deepCount(element);
            count += newCount;
        }

    }

    return count;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));




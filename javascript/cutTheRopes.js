// 6 kyu - Simple Fun #160: Cut The Ropes
function cutTheRopes(a) {
    let aCopy = a.slice();
    let ropesLeft = [];
    let minValue;
    
    while ( aCopy.length > 0 ) {
        ropesLeft.push(aCopy.length);
        minValue = Math.min(...aCopy);
    
        for (let i = 0; i < aCopy.length; i++) {
            if (aCopy[i] >= minValue) {
                aCopy[i] -= minValue;
            }
        }
    
        aCopy = aCopy.filter(element => element !== 0);
    }
    
    return ropesLeft;
}

const a = [3, 3, 2, 9, 7];
console.log(cutTheRopes(a));
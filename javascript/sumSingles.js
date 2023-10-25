// 7 kyu - Sum of array singles
function repeats(arr) {
    const numCounts = {};
    let sum = 0;

    for ( let num of arr ) {
        numCounts[num] ? numCounts[num] += 1 : numCounts[num] = 1;
    }

    for ( let key in numCounts ) {
        if ( numCounts[key] === 1 ) {
            sum += Number(key);
        }
    }

    return sum;
};

console.log(repeats([4,5,7,5,4,8]),15);
console.log(repeats([9, 10, 19, 13, 19, 13]),19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
console.log(repeats([5, 10, 19, 13, 10, 13]),24);
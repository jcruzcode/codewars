// 6 kyu - Smart Sum
function smartSum(...numbers){
    return numbers.flat(Infinity).reduce( (acc, val) => acc + val, 0);
}

console.log(smartSum(1,2,[[3,4],5],6));
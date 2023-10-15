// 7 kyu - Highest and Lowest
function highAndLow(numbers) {
    const nums = numbers.split(" ").map( element => Number(element) );
    const maxNum = Math.max(...nums);
    const minNum = Math.min(...nums);

   return `${maxNum} ${minNum}`;
}

console.log(highAndLow("1 2 3 4"));
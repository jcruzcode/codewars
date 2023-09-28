// 6 kyu - Find the odd int
function findOdd(numbers) {
    let numCounter = {};
    
    for ( let number of numbers ) {
      numCounter[number] ? numCounter[number] += 1 : numCounter[number] = 1;
    }
    
    for ( let num in numCounter ) {
      if ( numCounter[num] % 2 !== 0 ) {
        return Number(num);
      }
    }
    
}
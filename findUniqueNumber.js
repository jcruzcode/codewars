/* 6 kyu - Find the unique number */
function findUniq(arr) {
    // object will hold the number of
    // occurences of each number in arr
    let numberCounts = {};
    
    // Loop through each number in arr
    for (let number of arr) {
      // If the number exists as a key increment value by 1
      // Otherwise set value to 1
      numberCounts[number] ? numberCounts[number] += 1 : numberCounts[number] = 1;
    }
    
    // Loop through object keys and return key, as a number, that has a value of 1
    for (let key in numberCounts) {
      if( numberCounts[key] === 1) return Number(key);
    }
}
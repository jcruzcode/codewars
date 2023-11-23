// Highest Rank Number in an Array (6 kyu)
function highestRank(arr) {
    const ranks = {};
    const nums = [];
    let highRank;
  
    for (let element of arr) {
      ranks[element] ? ranks[element]++ : ranks[element] = 1;
    }
  
    const counts = Object.values(ranks).sort( (a, b) => b - a);
    highRank = counts[0];
  
    for ( let num in ranks ) {
      if ( ranks[num] === highRank ) {
        nums.push(+num);
      }
    }
  
    nums.sort( (a,b) => b - a);
  
    return nums[0];
  }
  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
  console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));